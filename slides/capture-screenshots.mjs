import { chromium } from 'playwright-chromium'
import { execSync, spawn } from 'node:child_process'
import { mkdirSync, existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const screenshotsDir = resolve(__dirname, 'screenshots')
const slidesFile = resolve(__dirname, 'slides.md')

// Parse slide layout names from slides.md and page files
function getSlideLayouts() {
  const content = readFileSync(slidesFile, 'utf-8')
  const layouts = []

  // First slide layout is in the main frontmatter
  const mainMatch = content.match(/^---\n([\s\S]*?)\n---/m)
  if (mainMatch) {
    const layoutMatch = mainMatch[1].match(/layout:\s*(.+)/)
    if (layoutMatch) layouts.push(layoutMatch[1].trim())
  }

  // Get page imports in order
  const srcMatches = [...content.matchAll(/src:\s*\.\/pages\/(.+\.md)/g)]
  for (const m of srcMatches) {
    const pagePath = resolve(__dirname, 'pages', m[1])
    if (existsSync(pagePath)) {
      const pageContent = readFileSync(pagePath, 'utf-8')
      const fmMatch = pageContent.match(/^---\n([\s\S]*?)\n---/m)
      if (fmMatch) {
        const layoutMatch = fmMatch[1].match(/layout:\s*(.+)/)
        if (layoutMatch) layouts.push(layoutMatch[1].trim())
      }
    }
  }
  return layouts
}

async function waitForServer(url, timeout = 30000) {
  const start = Date.now()
  while (Date.now() - start < timeout) {
    try {
      const res = await fetch(url)
      if (res.ok) return
    } catch {}
    await new Promise(r => setTimeout(r, 500))
  }
  throw new Error(`Server did not start within ${timeout}ms`)
}

async function main() {
  const port = 3033
  const baseUrl = `http://localhost:${port}`

  mkdirSync(screenshotsDir, { recursive: true })

  const layouts = getSlideLayouts()
  console.log(`Found ${layouts.length} slides:`, layouts)

  // Start Slidev dev server
  console.log('Starting Slidev dev server...')
  const server = spawn('npx', ['slidev', '--port', String(port), '--remote'], {
    cwd: __dirname,
    stdio: 'pipe',
    env: { ...process.env, BROWSER: 'none' },
  })

  server.stderr.on('data', d => {
    const msg = d.toString()
    if (msg.includes('ERROR')) console.error('[slidev]', msg)
  })

  try {
    await waitForServer(baseUrl)
    console.log('Server ready!')

    const browser = await chromium.launch()
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
    })
    const page = await context.newPage()

    for (let i = 0; i < layouts.length; i++) {
      const slideNum = i + 1
      const layoutName = layouts[i]
      const filename = `${String(slideNum).padStart(2, '0')}-${layoutName}.png`

      console.log(`Capturing slide ${slideNum}/${layouts.length}: ${layoutName}`)
      await page.goto(`${baseUrl}/${slideNum}`, { waitUntil: 'networkidle' })
      // Wait for animations to settle
      await page.waitForTimeout(2000)
      await page.screenshot({ path: resolve(screenshotsDir, filename) })
    }

    await browser.close()
    console.log(`\n✓ Captured ${layouts.length} screenshots to slides/screenshots/`)
  } finally {
    server.kill('SIGTERM')
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
