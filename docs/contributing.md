---
sidebar_position: 2
---

# Contributing

Learn how to quickly get started with the Revolt stack and contribute to the project.

## System Requirements

The Revolt stack is quite small, fragmented and easy to run which comes at the cost of a pretty demanding development environment. Below are a few recommendations if you want to get started.

- Modern multi-core CPU for Rust compilation, Ryzens are great for this job.
- About 30gb of free disk space to ensure everything can be installed and built.
- At minimum 12gb of free memory, I recommend having at least 16gb of system memory.
  - `500mb` to run the Revolt stack
  - `8gb` to run Visual Studio Code (includes rust-analyzer's 5gb memory usage)
  - `2gb` to run Chromium (conservative estimate)

:::caution note

These do not apply if you're just working on Revite (the web app) and/or Revolt Desktop. You'll probably be fine with 2GB of free memory or less.

:::

## Consider Alternatives

If you want to deploy Revolt in production, consider using [revolt/self-hosted](https://github.com/revoltchat/self-hosted) instead.

## Read before continuing

The current contribution guidelines are [here](https://github.com/revoltchat/revolt/discussions/282#discussion-3777997) - please make sure to read those and commit to these before starting to make any changes.

## Prerequisites

You need to have these tools installed and ready to go.

- Node.js ([v14+ recommended](https://nodejs.org/en/))
- npm (bundled with Node.js) or Yarn ([classic](https://classic.yarnpkg.com/lang/en/))
- Rust ([use the Nightly toolchain](https://rust-lang.github.io/rustup/concepts/channels.html#working-with-nightly-rust))
- Docker
- Git
- A Chromium browser (e.g. Chrome or Edge - use Chromium for most development/testing, as Firefox is notoriously slow with web apps)
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

Finally, initialise everything:

```bash
revolt init
revolt env
revolt build
```

## Working with Revolt

You can now open a VSCode workspace at the root of the directory you just installed the project to.

To run Revolt, simply open a terminal inside of any project folder or the root directory and run:

```bash
revolt run
```

You can now access Revite (the web app) at [http://local.revolt.chat:3001](http://local.revolt.chat:3001);
