---
sidebar_position: 8
---

# 8. Clarifying Notes on Third-Party Instances

:::caution
Please remember that if you are self-hosting Revolt, you are still:

- bound by the software license
- have restrictions on use of our brand

[Please read this article for more information.](/faq/usage)
:::

## What is a third-party instance?

A third-party instance is one that is not associated with the Revolt project or platform itself ("revolt.chat").

You cannot use your existing Revolt login on third-party instances and must create a new account if you wish to use it.

## How to get support?

If you want to get support with running Revolt, please use the #Programming channel on the [Revolt Lounge server](https://rvlt.gg/Testers).

Somebody from the team may help you if they are available, but please do not mention anyone in particular for help as Revolt is pretty much entirely volunteer supported and nobody has an obligation to help you for free.

## How to customise the client?

Currently, this is not entirely straightforward, my recommendation is to just simply fork the client and modify the `assets_default` folder as necessary. Reminder: the client is licensed under AGPLv3 so you must publish your modified client source and provide users with a way to access it.

## Moderating instances

As of right now, there are no easy ways to moderate third-party Revolt instances, though for smaller instances it should be sufficient to use MongoDB Compass for all administrative tasks.

## An argument against self-hosted communities

First of all, don't be deterred to self-host, it is a great way to learn how to manage systems and services but there are certain scenarios where cooperation with the main service may be more advantageous than going off and doing your own thing.

To put it bluntly:

- We are a small service and we want to grow.
- We can't beat the network effect if everyone is fragmented between instances.
- More growth means more attention, more development and better service quality.

Obviously if your community does not fit with our AUP / terms of service, then that's entirely fair, even if you do you're entirely free to run your own instance.
There may be other cases as well where it's appropriate, such as strict data protection requirements for a company requiring everything to be on-prem, or a small private instance between friends.
But if you are an independent community please consider helping grow the platform by settling a community on the main service, https://revolt.chat.

**To sum it up:** it's hard to get people to register on hundreds of different services, we're trying to keep that number as low as possible with Revolt by providing one global instance and resources to bridge other platforms over so that users have the freedom to not use the platform if they do not wish to. This gives us the best odds for growth.

If you're still convinced to run your own, we provide [a guide on the self-hosted repository](https://github.com/revoltchat/self-hosted).
