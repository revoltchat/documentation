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

| Name | Value | Description |
|---|:-:|---|
| `ManageChannel` | `1` | Manage the channel or channels on the server
| `ManageServer` | `2` | Manage the server
| `ManagePermissions` | `4` | Manage permissions on servers or channels
| `ManageCustomisation` | `8` | Manage emoji on servers
| `ManageRole` | `8` | Manage roles on server
| `KickMembers` | `64` | Kick other members below their ranking
| `BanMembers` | `128` | Ban other members below their ranking
| `TimeoutMembers` | `256` | Timeout other members below their ranking
| `AssignRoles` | `512` | Assign roles to members below their ranking
| `ChangeNickname` | `1024` | Change own nickname
| `ManageNicknames` | `2048` | Change or remove other's nicknames below their ranking
| `ChangeAvatar` | `4096` | Change own avatar
| `RemoveAvatars` | `8192` | Remove other's avatars below their ranking
| `ViewChannel` | `1048576` | View a channel
| `ReadMessageHistory` | `2097152` | Read a channel's past message history
| `SendMessage` | `4194304` | Send a message in a channel
| `ManageMessages` | `8388608` | Delete messages in a channel
| `ManageWebhooks` | `16777216` | Manage webhook entries on a channel
| `InviteOthers` | `33554432` | Create invites to this channel
| `SendEmbeds` | `67108864` | Send embedded content in this channel
| `UploadFiles` | `134217728` | Send attachments and media in this channel
| `Masquerade` | `268435456` | Masquerade messages using custom nickname and avatar
| `Connect` | `1073741824` | Connect to a voice channel
| `Speak` | `2147483648` | Speak in a voice call
| `Video` | `4294967296` | Share video in a voice call
| `MuteMembers` | `8589934592` | Mute other members with lower ranking in a voice call
| `DeafenMembers` | `17179869184` | Deafen other members with lower ranking in a voice call
| `MoveMembers` | `34359738368` | Move members between voice channels
