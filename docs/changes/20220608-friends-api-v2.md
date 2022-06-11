---
slug: 20220608-friends-api-v2
---

# 20220608-1: Friends API v2

To accomodate the new Unicode usernames, the existing add friend route is being split into two different routes:
- `PUT /users/{target}/friend`: Accept friend request where `{target}` is an ID
- `POST /users/friend`: Send friend request (with body `{ username: string }`)

The old route will stop accepting usernames in a week, see [20220608-2](/changes/20220608-friends-api-v1-deprecation).
