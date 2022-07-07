---
slug: 20220707-emoji-update
---

# 20220707-1: Emoji Update

This update adds support for server emojis, including the following REST routes:
- `GET /custom/emoji/<id>`: Get an existing emoji
- `PUT /custom/emoji/<id>`: Create a new emoji (uses Autumn id)
- `DELETE /custom/emoji/<id>`: Delete an emoji
- `GET /server/<id>/emojis`: Fetch all emoji in a server

It adds a new permission `ManageCustomisation` with value `8`.

It includes a new field in the `Ready` payload: `emojis?: Emoji[]`.

It adds two new events:
- `EmojiCreate(Emoji)`
- `EmojiDelete { id: String }`
