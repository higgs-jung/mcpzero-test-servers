# mcpzero-test-servers

Test MCP servers and skills for testing MCP Zero's submit/deploy flow.

This repository contains minimal but functional MCP servers and skill definitions
used to verify the end-to-end submission and deployment pipeline of MCP Zero.

## Servers

| Server | Description |
|--------|-------------|
| `servers/echo-mcp` | Simple echo server — returns the input message |
| `servers/weather-mcp` | Mock weather server — returns fake weather data for any city |
| `servers/calculator-mcp` | Basic calculator — add, subtract, multiply, divide |

All servers use [FastMCP](https://www.npmjs.com/package/fastmcp) with stdio transport.

## Skills

| Skill | Description |
|-------|-------------|
| `skills/summarize-skill` | Summarizes text content |
| `skills/translate-skill` | Translates text between languages |

## Usage

```bash
cd servers/echo-mcp && npm install && npm start
```

## License

MIT
