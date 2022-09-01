---
slug: 20220901-reactions-update
---

# 20220901-1: Reactions Update

This update adds support for message reactions, including the following REST routes:
- `PUT /channels/<id>/messages/<id>/reactions/<emoji>`: Add reaction to message
- `DELETE /channels/<id>/messages/<id>/reactions/<emoji>`: Remove reaction from message
- `DELETE /channels/<id>/messages/<id>/reactions`: Remove all reaction from a message

It adds a new permission `React` with value `536870912`.

It adds two new events:
- `MessageReact { id: String; channel_id: String; user_id: String; emoji_id: String; }`
- `MessageUnreact { id: String; channel_id: String; user_id: String; emoji_id: String; }`
- `MessageRemoveReaction { id: String; channel_id: String; emoji_id: String; }`
