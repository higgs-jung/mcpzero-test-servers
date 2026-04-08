# Summarize Skill

A skill that summarizes text content into a concise summary.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The text content to summarize |
| `max_sentences` | number | No | Maximum number of sentences (default: 3) |

## Example

```json
{
  "text": "Long article text here...",
  "max_sentences": 3
}
```

Returns a concise summary of the input text.
