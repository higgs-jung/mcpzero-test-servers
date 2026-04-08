import { FastMCP } from "fastmcp";

const server = new FastMCP({ name: "weather-mcp", version: "1.0.0" });

const MOCK_CONDITIONS = [
  "Sunny",
  "Partly Cloudy",
  "Overcast",
  "Light Rain",
  "Thunderstorms",
];

server.addTool({
  name: "get_weather",
  description: "Get the current weather for a city (returns mock data)",
  parameters: {
    type: "object",
    properties: {
      city: {
        type: "string",
        description: "The city name to get weather for",
      },
    },
    required: ["city"],
  },
  execute: async (args: { city: string }) => {
    const hash = args.city
      .split("")
      .reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const temp = 15 + (hash % 20);
    const condition = MOCK_CONDITIONS[hash % MOCK_CONDITIONS.length];
    const humidity = 40 + (hash % 50);

    return JSON.stringify({
      city: args.city,
      temperature_celsius: temp,
      condition,
      humidity_percent: humidity,
      wind_kph: 5 + (hash % 30),
      note: "This is mock data for testing purposes",
    });
  },
});

server.start({ transportType: "stdio" });
