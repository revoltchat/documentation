---
sidebar_position: 2
---

# Events

This page documents various incoming and outgoing events.

## Client -> Server

### Authenticate

Authenticate with Revolt.

```json
{
  "type": "Authenticate",
  "token": "{token}"
}
```

### BeginTyping

Tell other users that you have begun typing in a channel.

```json
{
  "type": "BeginTyping",
  "channel": "{channel_id}"
}
```

### EndTyping

Tell other users that you have stopped typing in a channel.

```json
{
  "type": "EndTyping",
  "channel": "{channel_id}"
}
```

### Ping

Ping the server, you can specify a timestamp that you'll receive back.

```json
{
  "type": "Ping",
  "data": 0
}
```

## Server -> Client

### Error

An error occurred which meant you couldn't authenticate.

```json
{
  "type": "Error",
  "error": "{error_id}"
}
```

The `{error_id}` can be one of the following:

- `LabelMe`: uncategorised error
- `InternalError`: the server ran into an issue
- `InvalidSession`: authentication details are incorrect
- `OnboardingNotFinished`: user has not chosen a username
- `AlreadyAuthenticated`: this connection is already authenticated

### Authenticated

The server has authenticated your connection and you will shortly start receiving data.

```json
{
  "type": "Authenticated"
}
```

### Bulk

Several events have been sent, process each item of `v` as its own event.

```json
{
    "type": "Bulk",
    "v": [...]
}
```

### Pong

Ping response from the server.

```json
{
  "type": "Pong",
  "data": 0
}
```

### Ready

Data for use by client, data structures match the API specification.

```json
{
    "type": "Ready",
    "users": [{..}],
    "servers": [{..}],
    "channels": [{..}],
    "emojis"?: [{..}]
}
```

### Message

Message received, the event object has the same schema as the Message object in the API with the addition of an event type.

```json
{
    "type": "Message",
    [..]
}
```

### MessageUpdate

Message edited or otherwise updated.

```json
{
    "type": "MessageUpdate",
    "id": "{message_id}",
    "channel": "{channel_id}",
    "data": {..}
}
```

- `data` field contains a partial Message object.

### MessageAppend

Message has data being appended to it.

```json
{
    "type": "MessageAppend",
    "id": "{message_id}",
    "channel": "{channel_id}",
    "append": {
        "embeds"?: [...]
    }
}
```

### MessageDelete

Message has been deleted.

```json
{
  "type": "MessageDelete",
  "id": "{message_id}",
  "channel": "{channel_id}"
}
```

### MessageReact

A reaction has been added to a message.

```json
{
  "type": "MessageReact",
  "id": "{message_id}",
  "channel_id": "{channel_id}",
  "user_id": "{user_id}",
  "emoji_id": "{emoji_id}"
}
```

### MessageUnreact

A reaction has been removed from a message.

```json
{
  "type": "MessageUnreact",
  "id": "{message_id}",
  "channel_id": "{channel_id}",
  "user_id": "{user_id}",
  "emoji_id": "{emoji_id}"
}
```

### MessageRemoveReaction

A certain reaction has been removed from the message.

```json
{
  "type": "MessageRemoveReaction",
  "id": "{message_id}",
  "channel_id": "{channel_id}",
  "emoji_id": "{emoji_id}"
}
```

### ChannelCreate

Channel created, the event object has the same schema as the Channel object in the API with the addition of an event type.

```json
{
    "type": "ChannelCreate",
    [..]
}
```

### ChannelUpdate

Channel details updated.

```json
{
    "type": "ChannelUpdate",
    "id": "{channel_id}",
    "data": {..},
    "clear": ["{field}", ...]
}
```

- `data` field contains a partial Channel object.
- `{field}` is a field to remove, one of:
  - `Icon`
  - `Description`

### ChannelDelete

Channel has been deleted.

```json
{
  "type": "ChannelDelete",
  "id": "{channel_id}"
}
```

### ChannelGroupJoin

A user has joined the group.

```json
{
  "type": "ChannelGroupJoin",
  "id": "{channel_id}",
  "user": "{user_id}"
}
```

### ChannelGroupLeave

A user has left the group.

```json
{
  "type": "ChannelGroupLeave",
  "id": "{channel_id}",
  "user": "{user_id}"
}
```

### ChannelStartTyping

A user has started typing in this channel.

```json
{
  "type": "ChannelStartTyping",
  "id": "{channel_id}",
  "user": "{user_id}"
}
```

### ChannelStopTyping

A user has stopped typing in this channel.

```json
{
  "type": "ChannelStopTyping",
  "id": "{channel_id}",
  "user": "{user_id}"
}
```

### ChannelAck

You have acknowledged new messages in this channel up to this message ID.

```json
{
  "type": "ChannelAck",
  "id": "{channel_id}",
  "user": "{user_id}",
  "message_id": "{message_id}"
}
```

### ServerCreate

Server created, the event object has the same schema as the SERVER object in the API with the addition of an event type.

```json
{
    "type": "ServerCreate",
    [..]
}
```

### ServerUpdate

Server details updated.

```json
{
    "type": "ServerUpdate",
    "id": "{server_id}",
    "data": {..},
    "clear": ["{field}", ...]
}
```

- `data` field contains a partial Server object.
- `{field}` is a field to remove, one of:
  - `Icon`
  - `Banner`
  - `Description`

### ServerDelete

Server has been deleted.

```json
{
  "type": "ServerDelete",
  "id": "{server_id}"
}
```

### ServerMemberUpdate

Server member details updated.

```json
{
    "type": "ServerMemberUpdate",
    "id": {
        "server": "{server_id}",
        "user": "{user_id}"
    },
    "data": {..},
    "clear": ["{field}", ...]
}
```

- `data` field contains a partial Server Member object.
- `{field}` is a field to remove, one of:
  - `Nickname`
  - `Avatar`

### ServerMemberJoin

A user has joined the group.

```json
{
  "type": "ServerMemberJoin",
  "id": "{server_id}",
  "user": "{user_id}"
}
```

### ServerMemberLeave

A user has left the group.

```json
{
  "type": "ServerMemberLeave",
  "id": "{server_id}",
  "user": "{user_id}"
}
```

### ServerRoleUpdate

Server role has been updated or created.

```json
{
    "type": "ServerRoleUpdate",
    "id": "{server_id}",
    "role_id": "{role_id}",
    "data": {..},
    "clear": ["{field}", ...]
}
```

- `data` field contains a partial Server Role object.
- `clear` is a field to remove, one of:
  - `Colour`

### ServerRoleDelete

Server role has been deleted.

```json
{
  "type": "ServerRoleDelete",
  "id": "{server_id}",
  "role_id": "{role_id}"
}
```

### UserUpdate

User has been updated.

```json
{
    "type": "UserUpdate",
    "id": "{user_id}",
    "data": {..},
    "clear": ["{field}", ...]
}
```

- `data` field contains a partial User object.
- `clear` is a field to remove, one of:
  - `ProfileContent`
  - `ProfileBackground`
  - `StatusText`
  - `Avatar`

### UserRelationship

Your relationship with another user has changed.

```json
{
  "type": "UserRelationship",
  "id": "{your_user_id}",
  "user": "{..}",
  "status": "{status}"
}
```

- `user` field contains a User object.
- `status` field matches Relationship Status in API.

### UserPlatformWipe

User has been platform banned or deleted their account.

Clients should remove the following associated data:

- Messages
- DM Channels
- Relationships
- Server Memberships

User flags are specified to explain why a wipe is occurring though not all reasons will necessarily ever appear.

```json
{
  "type": "UserPlatformWipe",
  "user_id": "{user_id}",
  "flags": "{user_flags}"
}
```

### EmojiCreate

Emoji created, the event object has the same schema as the Emoji object in the API with the addition of an event type.

```json
{
  "type": "EmojiCreate",
  [..]
}
```

### EmojiDelete

Emoji has been deleted.

```json
{
  "type": "EmojiDelete",
  "id": "{emoji_id}"
}
```

### Auth

Forwarded events from rAuth, currently only session deletion events are forwarded.

```json
{
  "type": "Auth",
  "event_type": "{event_type}",
  [..]
}
```

Event type may be defined as one of the following with the additional properties:

#### DeleteSession

A session has been deleted.

```json
{
  "event_type": "DeleteSession",
  "user_id": "{user_id}",
  "session_id": "{session_id}"
}
```

#### DeleteAllSessions

All sessions for this account have been deleted, optionally excluding a given ID.

```json
{
  "event_type": "DeleteAllSessions",
  "user_id": "{user_id}",
  "exclude_session_id": "{session_id}"
}
```
