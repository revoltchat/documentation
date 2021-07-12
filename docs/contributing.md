---
sidebar_position: 2
---

# Contributing

Learn how to quickly get started with the Revolt stack and contribute to the project.

## Prerequisites

You need to have these tools installed and ready to go.

- Node.js ([v14+ recommended](https://nodejs.org/en/))
- npm (bundled with Node.js) or yarn ([classic](https://classic.yarnpkg.com/lang/en/))
- Rust ([use Nightly toolchain](https://rust-lang.github.io/rustup/concepts/channels.html#working-with-nightly-rust))
- Docker
- Git

## Setup Environment

To get started, first install the stack CLI.

```bash
# For npm users
npm i -g revolt-stack

# For yarn users
yarn global add revolt-stack
```

Now create a new folder where you want to install Revolt into.

```bash
mkdir /path/to/revolt
cd /path/to/revolt
```

And initialise everything:

```bash
revolt init
revolt env
revolt build
```

## Working with Revolt

You can now open the Code workspace at the root of the directory you just installed the project to.

To run Revolt, simply open a terminal inside of any project folder or the root directory and run:

```bash
revolt run
```

You can now access the Web App at [http://local.revolt.chat:3001](http://local.revolt.chat:3001);

:::warning

Certain features may need extra manual configuration.

- Autumn requires you to manually create **minio** buckets.
  This issue is known and is being [tracked here](https://gitlab.insrt.uk/revolt/autumn/-/issues/2).

  To resolve this issue:

  - Open [Autumn configuration here](https://gitlab.insrt.uk/revolt/autumn/-/blob/master/Autumn.toml) and take note of all the `tags.x` entries, e.g. `attachments`, `avatars`.
  - Open minio in your browser: [http://localhost:9050](http://localhost:9050)
  - Login with the credentials: `minioautumn` / `minioautumn`
  - Press the plus button in the bottom left and create new bucket.
  - Create a bucket for each tag.

:::
