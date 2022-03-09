---
sidebar_position: 1
slug: /websockets
---

# Overview

The WebSocket server delivers events from Revolt and is the point of entry for most clients.

You can find the address of the WS server [from the API](/api/#tag/Core/paths/~1/get).

- [Events](/websockets/events)
- [Establishing a connection](/websockets/establishing)

## Alternative Formats

You can specifically tell the server that you want to operate in `json` or `msgpack` mode by connecting to the appropriate address.

For example, `wss://ws.revolt.chat?format=msgpack` will allow you to communicate in binary msgpack formatted packets.

:::caution

The events system is due to receive some minor updates to typings and the connection strategy, keep up to date by joining the [Revolt Lounge](https://rvlt.gg/Testers).

:::
