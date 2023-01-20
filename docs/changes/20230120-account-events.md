---
slug: 20230120-account-events
---

# 20230120-1: New Account Events

This update adds two new events:

- `UserPlatformWipe { user_id: String; flags: Int; }`
- `Auth { event_type: 'DeleteSession' | 'DeleteAllSessions'; [..] }` (see [Auth](/stack/bonfire/events#auth))

It also adds a new user flag of value `8` which represents a user who has been flagged and removed as spam.
