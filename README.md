# mcpzero-test-servers

Test MCP servers and skills for testing MCP Zero's submit/deploy flow.

This repository contains minimal but functional MCP servers and skill definitions
used to verify the end-to-end submission and deployment pipeline of MCP Zero.

## Servers

| Server | Transport | Description |
|--------|-----------|-------------|
| `servers/echo-mcp` | stdio | Simple echo server — returns the input message |
| `servers/weather-mcp` | stdio | Mock weather server — returns fake weather data for any city |
| `servers/calculator-mcp` | stdio | Basic calculator — add, subtract, multiply, divide |
| `servers/echo-http` | httpStream | Streamable HTTP echo server — echo, greet, timestamp tools |

Servers using stdio transport are built with [FastMCP](https://www.npmjs.com/package/fastmcp).

### echo-http (Streamable HTTP)

The `servers/echo-http` server uses FastMCP with `httpStream` transport, suitable for deployment to Vercel or any HTTP hosting.

Tools provided:
- **echo** — returns the input message
- **greet** — generates a greeting in English, Korean, or Japanese
- **timestamp** — returns the current server time

```bash
cd servers/echo-http && npm install && npm start
# Server runs at http://localhost:8080/mcp
```

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
