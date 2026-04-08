import { FastMCP } from "fastmcp";

const server = new FastMCP({
  name: "echo-http-mcp",
  version: "1.0.0",
});

server.addTool({
  name: "echo",
  description: "Echo back the input message",
  parameters: {
    type: "object" as const,
    properties: {
      message: { type: "string" as const, description: "Message to echo" },
    },
    required: ["message"],
  },
  execute: async (args: { message: string }) => {
    return `Echo: ${args.message}`;
  },
});

server.addTool({
  name: "greet",
  description: "Generate a greeting for a name",
  parameters: {
    type: "object" as const,
    properties: {
      name: { type: "string" as const, description: "Name to greet" },
      language: { type: "string" as const, description: "Language for greeting (en/ko/ja)", default: "en" },
    },
    required: ["name"],
  },
  execute: async (args: { name: string; language?: string }) => {
    const greetings: Record<string, string> = {
      en: `Hello, ${args.name}!`,
      ko: `안녕하세요, ${args.name}님!`,
      ja: `こんにちは、${args.name}さん！`,
    };
    return greetings[args.language ?? "en"] ?? greetings.en;
  },
});

server.addTool({
  name: "timestamp",
  description: "Return the current server timestamp",
  parameters: { type: "object" as const, properties: {} },
  execute: async () => {
    return new Date().toISOString();
  },
});

const port = parseInt(process.env.PORT ?? "8080", 10);

server.start({
  transportType: "httpStream",
  httpStream: { port },
});

console.log(`Echo HTTP MCP server running on port ${port}`);
