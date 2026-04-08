# Translate Skill

A skill that translates text between languages.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | The text to translate |
| `source_language` | string | No | Source language code (default: auto-detect) |
| `target_language` | string | Yes | Target language code (e.g. en, ko, ja) |

## Example

```json
{
  "text": "Hello, world!",
  "target_language": "ko"
}
```

Returns the translated text in the target language.
