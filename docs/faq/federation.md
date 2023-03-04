---
sidebar_position: 2
---

# 1. No federation?

:::danger

Hold on, this article is quite old at this point, just a few things to keep in mind:

- Federation may end up being part of the project in some capacity in the future, just at the moment it is not part of any feature (_at least publicly_) on the roadmap.
- The complexity and time arguments below are still valid but may be necessary to tackle in the future.

If you have some general ideas on where and how federation could be implemented, feel free to drop into the [Lounge](https://rvlt.gg/Testers) #Revolt Development.

:::

:::caution

This article expects prior knowledge of federation - if you're new to the concept, [learn more here](https://matrix.org/faq/#what-does-federated-mean%3F).

In this case, we are talking about letting users send messages and join channels on other servers.

:::

This question comes around every now and then.<br/>A lot of people are curious why Revolt isn't federated - this page hopes to clarify that.

## Short Answer

We don't think federation is beneficial to Revolt and would actively hinder our stance on privacy. In short, federation is prone to leaking your metadata, could make removing your data harder, and we otherwise have no incentive to develop support if it we aren't able to use it for the main platform (revolt.chat).

In terms of technical reasons:

- We don't have the manpower or resources to implement federation into our protocol.
- It would be difficult to adopt our protocol to work with federation.

Some of these points are explained in-depth below.

## Long Technical Answer

Hopefully everything can be answered here, but if you have any questions feel free to [ask on the Revolt Testers server](https://rvlt.gg/Testers) or [liase with me directly](https://insrt.uk).

### Complexity

The protocol as it stands is developed in a centralised manner, all the components within the system expect that all of the data we have and are processing is valid and trusted. Adding federation into the mix means updating the entire identity system, figuring out how events should now be distributed, figuring out how to trust information going in and out of the server, and also supporting running a server without federation.

To expand on the last point, I do not believe we can be GDPR compliant or actively protect user's privacy if we enable federation on the main platform (revolt.chat) without investing a lot of time into figuring out how to safeguard user's metadata (an issue which appears to be quite prominent on other federated applications).

Ultimately, it's not worth it for us to build federation in if it's not feasible for us to use it on the main platform.

### Time

The Revolt team currently consists mostly of students (18-20 years old), and the majority of the project organisation and work is being done by one person (Insert). We do not have the manpower to build anything like this out.

To quote myself from a previous version of this document:

> I have just started my first year at university. I do not physically have the time to even consider planning out federation, and it would likely require a complete rewrite of everything just due to the nature of how it has been designed. I want to get Revolt to a useable state, and working on federation would get in the way of that goal.
