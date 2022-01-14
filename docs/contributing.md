---
sidebar_position: 2
---

# Contributing

Learn how to quickly get started with the Revolt stack and contribute to the project.

## System Requirements

Revolt is quite small, fragmented and easy to run which comes at the cost of a pretty demanding development environment, below are a few recommendations if you want to get started.

- Modern multi-core CPU for Rust compilation, Ryzens are great for this job.
- About 30gb of free disk space to ensure everything can be installed and built.
- At minimum 12gb of free memory, I recommend having at least 16gb of system memory.
  - `500mb` to run the Revolt stack
  - `8gb` to run Visual Studio Code (includes rust-analyzer's 5gb memory usage)
  - `2gb` to run Chromium (conservative estimate)

:::caution note

These do not apply if you're just working on the web app, you'll probably be fine with 2 gb of free memory or less.

:::

## Consider Alternatives

If you want to deploy Revolt in production, consider using [revolt/self-hosted](https://github.com/revoltchat/self-hosted) instead.

## Read before continuing

The current contribution guidelines are [here](https://github.com/revoltchat/revolt/discussions/282#discussion-3777997) - please make sure to read those and commit to these before starting to change any code.

## Prerequisites

You need to have these tools installed and ready to go.

- Node.js ([v14+ recommended](https://nodejs.org/en/))
- npm (bundled with Node.js) or yarn ([classic](https://classic.yarnpkg.com/lang/en/))
- Rust ([use Nightly toolchain](https://rust-lang.github.io/rustup/concepts/channels.html#working-with-nightly-rust))
- Docker
- Git
- Chromium (if you're just developing, Firefox is notoriously slow with web apps)
- Firefox (if you're testing compatibility)

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
  This issue is known and is being [tracked here](https://github.com/revoltchat/autumn/issues/1).

  To resolve this issue:

  - Open [Autumn configuration here](https://github.com/revoltchat/autumn/blob/master/Autumn.toml) and take note of all the `tags.x` entries, e.g. `attachments`, `avatars`.
  - Open minio in your browser: [http://localhost:9050](http://localhost:9050)
  - Login with the credentials: `minioautumn` / `minioautumn`
  - Press the plus button in the bottom left and create new bucket.
  - Create a bucket for each tag.

:::
