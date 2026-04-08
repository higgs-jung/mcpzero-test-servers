import { FastMCP } from "fastmcp";

const server = new FastMCP({ name: "echo-mcp", version: "1.0.0" });

server.addTool({
  name: "echo",
  description: "Echo back the input message",
  parameters: {
    type: "object",
    properties: {
      message: {
        type: "string",
        description: "The message to echo back",
      },
    },
    required: ["message"],
  },
  execute: async (args: { message: string }) => {
    return args.message;
  },
});

server.start({ transportType: "stdio" });
