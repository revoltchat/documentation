---
sidebar_position: 3
---

# Establishing a connection

To get started, you should have:
- A WebSocket URL, which is found from the API root.
- A valid session or bot token.

Begin by connecting to the server, once you're connected then you can send a [Authenticate](/websockets/events#authenticate) event to the server.

You should listen out for [Error](/websockets/events#error) events to find out if your credentials are incorrect or if something goes wrong here.

After authenticating, the server will respond with [Authenticated](/websockets/events#authenticated) then it will send a [Ready](/websockets/events#ready) event containing useful data.

The server will now start sending relevant events as they come in.

You should [Ping](/websockets/events#ping) the server every 10 to 30 seconds to prevent your connection being dropped.
