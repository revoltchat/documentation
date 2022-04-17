---
sidebar_position: 2
---

# Migrating from Discord.JS

## A word of warning
Before we begin, please note that **Revolt does not support interactions or slash commands**. This guide will only help for bots that use message-based commands and such. While we may add support for slash commands in the future, for now message-based commands are the only option for making Revolt bots.

## The basics

-  If you're not already using ESM for your Discord bot please note that unlike Discord.JS - which supports both CommonJS and ESM (see [here](https://nodejs.org/api/esm.html) for more info on the latter) - Revolt.js is an **ESM-only library**. This means you can't `require()` the library, and will instead need to import it like this:

```diff
- const { Client } = require("discord.js");
+ import { Client } from "revolt.js";
```

You'll also need to set the `type` field in your `package.json` to `module`, alongside other changes. See [this `node-fetch` issue](https://github.com/node-fetch/node-fetch/issues/1279) for more info on how to switch to ESM.

:::warning

Even if you're already using ESM, take note - when running your bot, make sure to pass `--experimental-specifier-resolution=node` as a Node flag (for example, `node --experimental-specifier-resolution=node index.js`). **Revolt.js will not work if you do not pass this flag.**

:::

- Unlike Discord, Revolt *does not have intents* and you do not need to specify them when creating a client. You should remove any code that specifies any intents.

- `client.once("ready", () => { code })` should be replaced with `client.on("ready", async () => { code }`.

- `client.login(botToken)` should be replaced with `client.loginBot(botToken)` (or, for selfbots, `client.useExistingSession(sessionToken, user_id: "", name: "")`).

- `client.guilds` should be replaced with `client.servers`.

## Messages

- Unlike Discord.JS, messages may sometimes be [`SystemMessage`](https://github.com/revoltchat/api/blob/master/src/schema.ts#L1048-L1101)s. You'll need to handle these - either by ignoring them (like this):

```ts
if (typeof message.content !== "string") return;
```

- ...or by handling them separately (for example, if you're making a logging bot and want to log these events).

- Messages are not guaranteed to have channels. You'll mostly see this with `SystemMessages`. To prevent any issues, use optional chaining like this:

```ts
message.channel?.xyz
```

- On top of this, Revolt.js's `.send` function is `.sendMessage` - `message.channel.send` should be replaced with `message.channel?.sendMessage`.

#### Embeds

- Embeds do not have fields - you should use bold text and newlines to acheive a similar effect.

- You can't *directly* send an embed-only message - you have to specify the message content field. Fortunately, you can send an embed-only message by setting the content field to a space. The space won't be rendered, so you'll only see the embed in-app.