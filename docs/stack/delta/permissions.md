---
sidebar_position: 1
---

# Permissions

Revolt's permission system works by sequentially applying allows then denies.

## Flow Chart

Below are the high-level steps taken to determine both server and channel permissions.

<img src="/img/diagrams/Permission Hierarchy.svg" />

If you are looking to implement permissions in a library, I highly recommend reading either `revolt.js` or `delta` source code since all the routines are well commented and should be relatively easy to understand.

## Values

The following permissions are currently allocated:

| Name | Value | Bitwise | Description |
|---|:-:|:-:|---|
| `ManageChannel` | `1` | `1 << 0` | Manage the channel or channels on the server
| `ManageServer` | `2` | `1 << 1` | Manage the server
| `ManagePermissions` | `4` | `1 << 2` | Manage permissions on servers or channels
| `ManageRole` | `8` | `1 << 3` |Manage roles on server
| `ManageCustomisation` | `16` | `1 << 4` | Manage emoji on servers
| `KickMembers` | `64` | `1 << 6` | Kick other members below their ranking
| `BanMembers` | `128` | `1 << 7` | Ban other members below their ranking
| `TimeoutMembers` | `256` | `1 << 8` | Timeout other members below their ranking
| `AssignRoles` | `512` | `1 << 9` | Assign roles to members below their ranking
| `ChangeNickname` | `1024` | `1 << 10` | Change own nickname
| `ManageNicknames` | `2048` | `1 << 11` | Change or remove other's nicknames below their ranking
| `ChangeAvatar` | `4096` | `1 << 12` | Change own avatar
| `RemoveAvatars` | `8192` | `1 << 13` | Remove other's avatars below their ranking
| `ViewChannel` | `1048576` | `1 << 20` | View a channel
| `ReadMessageHistory` | `2097152` | `1 << 21` | Read a channel's past message history
| `SendMessage` | `4194304` | `1 << 22` | Send a message in a channel
| `ManageMessages` | `8388608` | `1 << 23` | Delete messages in a channel
| `ManageWebhooks` | `16777216` | `1 << 24` | Manage webhook entries on a channel
| `InviteOthers` | `33554432` | `1 << 25` | Create invites to this channel
| `SendEmbeds` | `67108864` | `1 << 26` | Send embedded content in this channel
| `UploadFiles` | `134217728` | `1 << 27` | Send attachments and media in this channel
| `Masquerade` | `268435456` | `1 << 28` |Masquerade messages using custom nickname and avatar
| `React` | `536870912` | `1 << 29` | React to messages with emojis
| `Connect` | `1073741824` | `1 << 30` | Connect to a voice channel
| `Speak` | `2147483648` | `1 << 31` | Speak in a voice call
| `Video` | `4294967296` | `1 << 32` | Share video in a voice call
| `MuteMembers` | `8589934592` | `1 << 33` | Mute other members with lower ranking in a voice call
| `DeafenMembers` | `17179869184` | `1 << 34` | Deafen other members with lower ranking in a voice call
| `MoveMembers` | `34359738368` | `1 << 35` | Move members between voice channels
