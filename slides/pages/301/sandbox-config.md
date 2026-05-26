---
layout: default
section: Security
---

# Sandbox Configuration

Enable sandboxing per server in `mcp.json`:

```json
{
  "servers": {
    "myServer": {
      "command": "npx",
      "args": ["-y", "@example/mcp-server"],
      "sandboxEnabled": true,
      "sandbox": {
        "filesystem": {
          "allowWrite": ["${workspaceFolder}"]
        },
        "network": {
          "allowedDomains": ["api.example.com"]
        }
      }
    }
  }
}
```

- `filesystem.allowWrite` — only these paths are writable
- `network.allowedDomains` — only these domains are reachable
- Everything else is kernel-denied

<div class="mt-3 text-sm opacity-70">Available on macOS and Linux (WSL2 on Windows). Not yet supported natively on Windows.</div>

<!--
This is the configuration companion to the sandboxing concept slide.
The sandbox config is simple: declare what's allowed, everything else is denied.
${workspaceFolder} is the typical write scope — your project files only.
-->
