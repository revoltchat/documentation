---
sidebar_position: 2
---

# 1. No federation?

:::caution

This article expects prior knowledge of federation, [learn more about it here](https://matrix.org/faq/#what-does-federated-mean%3F).

In this case, we are talking about letting users send messages and join channels on other servers.

:::

This question comes around every now and then.<br/>A lot of people are curious why Revolt isn't federated - this page hopes to clarify that.

## Short Answer

We don't think federation is beneficial to Revolt and would actively hinder our stance on privacy. In short, federation is prone to leaking your metadata, could make removing your data harder, and we otherwise have no incentive to develop support if it we aren't able to use it for the main platform (revolt.chat).

In terms of technical reasons:
- We don't have the manpower or resources to implement federation into our protocol.
- It would prove to be difficult to adopt our protocol to work in a federated style.
- It does not let us guarantee the security and safety of our users.
- It does not let us guarantee real-time communication.

Some of these points are explained in-depth below.

## Long Technical Answer

Hopefully everything can be answered here, but if you have any questions feel free to [ask on the Revolt Testers server](https://rvlt.gg/Testers) or [liase with me directly](https://insrt.uk).

### Complexity

The protocol as it stands is developed in a centralised manner, all the components within the system expect that all of the data we have and are processing is valid and trusted. Adding federation into the mix means updating the entire identity system, figuring out how events should now be distributed, figuring out how to trust information going in and out of the server, and also supporting running a server without federation.

To expand on the last point, I do not believe we can be GDPR compliant or actively protect user's privacy if we enable federation on the main platform (revolt.chat) without investing a lot of time into figuring out how to safeguard user's metadata (an issue which appears to be quite prominent on other federated applications).

Ultimately, it's not worth it for us to build federation in if it's not feasible for us to use it on the main platform.

### Time

The Revolt team currently comprises of mainly students (18 to 20 years old), and the majority of the project organisation and work is being done by one person (insert). We do not have the manpower to build anything like this out.

To quote myself from earlier:

> I have just started my first year at university. I do not physically have the time to even consider planning out federation, and it would likely require a complete rewrite of everything just due to the nature of how it has been designed. I want to get Revolt to a useable state, and working on federation would get in the way of that goal.
