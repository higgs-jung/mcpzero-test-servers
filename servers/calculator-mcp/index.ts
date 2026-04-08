import { FastMCP } from "fastmcp";

const server = new FastMCP({ name: "calculator-mcp", version: "1.0.0" });

server.addTool({
  name: "calculate",
  description: "Perform a basic arithmetic calculation",
  parameters: {
    type: "object",
    properties: {
      operation: {
        type: "string",
        enum: ["add", "subtract", "multiply", "divide"],
        description: "The arithmetic operation to perform",
      },
      a: {
        type: "number",
        description: "First operand",
      },
      b: {
        type: "number",
        description: "Second operand",
      },
    },
    required: ["operation", "a", "b"],
  },
  execute: async (args: { operation: string; a: number; b: number }) => {
    let result: number;

    switch (args.operation) {
      case "add":
        result = args.a + args.b;
        break;
      case "subtract":
        result = args.a - args.b;
        break;
      case "multiply":
        result = args.a * args.b;
        break;
      case "divide":
        if (args.b === 0) {
          return JSON.stringify({ error: "Division by zero" });
        }
        result = args.a / args.b;
        break;
      default:
        return JSON.stringify({ error: `Unknown operation: ${args.operation}` });
    }

    return JSON.stringify({
      operation: args.operation,
      a: args.a,
      b: args.b,
      result,
    });
  },
});

server.start({ transportType: "stdio" });
