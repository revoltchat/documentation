---
sidebar_position: 6
---

# Environment Variables

### Common Variables ([`quark`](https://github.com/revoltchat/quark))

Applies to both the API and events servers.

| Name | Description | Default |
|---|---|---|
| `MONGODB` | URI of MongoDB server | `mongodb://localhost` |
| `REDIS_URI` | URI of Redis server | `redis://localhost` |

Additional variables are available from [redis-kiss](https://github.com/insertish/redis_kiss).

### API Server ([`delta`](https://github.com/revoltchat/delta))

| Name | Description | Default |
|---|---|---|
| `REVOLT_PUBLIC_URL` | External API address | Required |
| `REVOLT_APP_URL` | Remote Web App address | Required |
| `REVOLT_EXTERNAL_WS_URL` | External WebSocket address | Required |
| `AUTUMN_PUBLIC_URL` | Remote Autumn host | `https://example.com` |
| `JANUARY_PUBLIC_URL` | Remote January host | `https://example.com` |
| `VOSO_PUBLIC_URL` | Remote Vortex host | `https://example.com` |
| `VOSO_WS_HOST` | WebSocket host of remote Vortex service | `https://example.com` |
| `VOSO_MANAGE_TOKEN` | Token used for authenticating with Vortex | `0` |
| `REVOLT_HCAPTCHA_KEY` | hCaptcha private key | `0x0000000000000000000000000000000000000000` |
| `REVOLT_HCAPTCHA_SITEKEY` | hCaptcha site key | `10000000-ffff-ffff-ffff-000000000001` |
| `REVOLT_VAPID_PRIVATE_KEY` | Private key used for Web Push authentication.<br/> [Generate keys.](https://gitlab.insrt.uk/revolt/delta/-/wikis/vapid) | Required |
| `REVOLT_VAPID_PUBLIC_KEY` | Public key used for Web Push authentication. | Required |
| `REVOLT_INVITE_ONLY` | Whether registrations should be restricted to invite-only. | `0` |
| `REVOLT_SMTP_HOST` | SMTP Host | Empty |
| `REVOLT_SMTP_USERNAME` | SMTP Username | Empty |
| `REVOLT_SMTP_PASSWORD` | SMTP Password | Empty |
| `REVOLT_SMTP_FROM` | SMTP From Address | Empty |
| `REVOLT_MAX_GROUP_SIZE` | Maximum number of users in group | `50` |
| `REVOLT_MAX_BOT_COUNT` | Maximum number of users in group | `5` |
| `REVOLT_MAX_EMBED_COUNT` | Maximum number of users in group | `5` |
| `REVOLT_MAX_SERVER_COUNT` | Maximum number of users in group | `100` |
| `REVOLT_EARLY_ADOPTER_BADGE` | Maximum number of users in group | `0` |

:::warning
These variables are likely to change as variables are moved into quark.
:::

### Events Service ([`bonfire`](https://github.com/revoltchat/bonfire))

| Name | Description | Default |
|---|---|---|
| `HOST` | IP and port to bind events service to. | `0.0.0.0:9000` |

### File Server ([`autumn`](https://github.com/revoltchat/autumn))

| Name | Description | Default |
|---|---|---|
| `AUTUMN_CONFIG` | Path to Autumn.toml | `Autumn.toml` |
| `AUTUMN_HOST` | Host to bind to | Required |
| `AUTUMN_MONGO_URI` | URI of MongoDB server | Required |
| `AUTUMN_LOCAL_STORAGE_PATH` | Path to local storage | `./files` |
| `AUTUMN_S3_REGION` | S3 region | Empty |
| `AUTUMN_S3_ENDPOINT` | S3 endpoint | Empty |

S3 is automatically enabled when `AUTUMN_S3_REGION` and `AUTUMN_S3_ENDPOINT` are set.

### Proxy Server ([`january`](https://github.com/revoltchat/january))

| Name | Description | Default |
|---|---|---|
| `JANUARY_HOST` | Host to bind to | Required |

### Voice Server ([`vortex`](https://github.com/revoltchat/vortex))

| Variable       | Description                                                                                                                             | Example                          |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `HTTP_HOST`    | Host to bind to to.                                                                                                                | `0.0.0.0:8080` (default)         |
| `WS_URL`       | The websocket URL to advertise.                                                                                                         | `wss://vortex.revolt.chat`       |
| `MANAGE_TOKEN` | The token used for communication between Vortex and Delta.                                                                              | `<token>`                        |
| `RTC_MIN_PORT` | The minimum port to use for WebRTC and RTP.                                                                                             | `10000` (default)                |
| `RTC_MAX_PORT` | The maximum port to use for WebRTC and RTP.                                                                                             | `11000` (default)                |
| `DISABLE_RTP`  | Disable RTP. The value `1` disables RTP, all other values or not set will enable RTP.                                                   | `0` (default)                    |
| `RTC_IPS`      | Semicolon separated list of IPs to use for WebRTC. Hostnames are not supported yet. Either combined or split listen and announce IPs.   | `<combined>;<listen>,<announce>` |
