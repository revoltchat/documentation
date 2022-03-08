---
sidebar_position: 2
---

# Contribution Guide

Learn how to quickly get started with the Revolt stack and contribute to the project.

If you are not a developer, please see the [How To Help](/#how-to-help) section on the home page.

## 1. Read before continuing

The current contribution guidelines are [here](https://github.com/revoltchat/revolt/discussions/282#discussion-3777997).<br/>Please **make sure to read and commit to these** before starting to make any changes.

## 2. Consider Alternative Toolchains

Before you continue, this guide is meant for running the **full** stack locally which may be quite demanding and is not applicable to most developers. You may want to:
- Compile and run [individual components](https://github.com/revoltchat) from source.<br/>If you are looking to contribute to the **client**, [please clone and work with revite](https://github.com/revoltchat/revite) on its own.
- Or use [revolt/self-hosted](https://github.com/revoltchat/self-hosted) to spin up a local testing environment.

## 3. System Requirements

The Revolt stack is quite small, fragmented and easy to run which comes at the cost of a pretty demanding development environment. Below are a few recommendations if you want to get started:

- A modern multi-core CPU for Rust compilation - Ryzens are great for this job.
- About 30GB of free disk space to ensure everything can be installed and built.
- At minimum 12GB of free memory, I recommend having at least 16GB of system memory:
  - `500MB` to run the Revolt stack
  - `8GB` to run Visual Studio Code (includes rust-analyzer's 5GB memory usage)
  - `2GB` to run Chromium (conservative estimate)

:::caution note

These do not apply if you're just working on Revite (the web app) and/or Revolt Desktop. You'll probably be fine with 2GB of free memory or less.

:::

## 4. Prerequisites

You need to have these tools installed and ready to go.

- Node.js (LTS recommended)
- npm (bundled with Node.js) or Yarn (preferred; [Classic (1.x)](https://classic.yarnpkg.com/lang/en/))
- Rust (in some cases, you may need [the Nightly toolchain](https://rust-lang.github.io/rustup/concepts/channels.html#working-with-nightly-rust))
- Docker
- Git

If working with the web app, please use and test your changes on:
- A Chromium browser (e.g. Chrome or Edge)
- A WebKit browser (e.g. Safari or Epiphany)
- Firefox

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

You can now access Revite (the web client) at [http://local.revolt.chat:3001](http://local.revolt.chat:3001).
