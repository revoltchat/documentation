---
sidebar_position: 2
---

# 1. Why no federation?

This question comes around every now and then. A lot of people are curious why Revolt isn't federated - this page hopes to clarify that.

## Short Answer

In terms of the **specification**, Revolt is meant to be an alternative to things like Discord and Rocket, not Matrix. Matrix does federation and does it well, and we do not intend to compete with it.

In terms of the **situation**, we started the project when none of us even knew what federation was, so it was never even considered from the start. Although we have other reasons for not including it now as below.

## Long Technical Answer

This requires a bit of time to answer. Hopefully everything can be answered here, but if you have any questions feel free to [ask on the Revolt Testers server](https://rvlt.gg/Testers) or [liase with me directly](https://insrt.uk).

### Complexity

Federation and Discord-style protocols are inherently incompatible. It would be a huge job to even begin to get them to play nicely together.

While our protocol could theoretically be changed, it would break virtually everything. The current API heavily relies on trusting the server and federating the entire API would be a huge pain as I will describe below.

### Time

The main Revolt team mainly comprises of students (17 to 19 years), and most of the work is done by me (Insert). I have just started my first year at university. I do not physically have the time to even consider planning out federation, and it would likely require a complete rewrite of everything just due to the nature of how it has been designed. I want to get Revolt to a useable state, and working on federation would get in the way of that goal.

### Nobody actually wants it

This is the opinion part of the FAQ. I would like to ask you explicitly to **not see this as an opportunity to dismiss the other two points** which hold **significantly more weight** (as I've seen some people do). The community - and other developers - have expressed that they don't actually see a benefit in having federation for Revolt. This is just our general opinion on the matter and I agree that it would probably just kill Revolt in the sense that the entire project would need to essentially be put on pause to implement this.

Previously I mentioned here that it would cause fragmentation. I would say that was not right - in fact, it would be quite beneficial in allowing other instances to interact with the main server - but we have alternative ideas which will allow us to bridge that gap. For example, we may add single sign-on with the main instance, bridges between instances and so on.

Honorable mention:

<img src="https://autumn.revolt.chat/attachments/7mYMu8Rj0xvO0-xBwKFNgKW1a7NP82SIGq2GDI55m6/image.png" width="320" />
