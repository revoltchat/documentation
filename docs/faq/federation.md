---
sidebar_position: 2
---

# 1. Why no federation?

This question comes around every now and then, a lot of people are curious why Revolt isn't federated, this page hopes to clarify that.

## Short Answer

In terms of **specification**, Revolt is meant to be an alternative to things like Discord and Rocket, not Matrix. Matrix does federation and does it well, we do not intend to compete with it.

In terms of **the situation**, we started the project when none of us even knew what federation was, so it was never even considered from the start. Although we have other reasons for not including it now as below.

## Long Technical Answer

This requires a bit of time to answer, hopefully everything can be answered here, if you have any questions feel free to ask on the Revolt testers server or [liase with me directly](https://insrt.uk).

### Complexity

Federation and Discord-style protocols are inherently incompatible, I know even the fosscord project hit this issue and they have way more core developers than we do.

While our protocol could theoretically be changed, it would break virtually everything. The current API heavily relies on trusting the server and federating the entire API would be a huge pain as I will describe below.

### Time

The main Revolt team comprises of mainly students (17 to 19 years), and most of the work is done by me, I am personally (as of time writing this, 18th August), starting my first year at university in just a month or so. I do not physically have the time to even consider planning out federation.

### Nobody actually wants it

The community and other developers have expressed that they don't actually see a benefit in having federation for Revolt.

For a project of this size, it creates a lot of fragmentation and again if someone wants federation, Matrix exists, I actively recommend people to use it if they want solid federation. We are not here to create or build on Matrix, we are here to provide people with an awesome open-source alternative to Discord that people don’t have to worry about their privacy on and are free to self-host.

From personal experience, I’ve generally found federated protocols to not be suitable for real time communication, Matrix is incredibly buggy at times and it’s left a sour taste in my mouth.

Honorable mention:

<img src="https://autumn.revolt.chat/attachments/7mYMu8Rj0xvO0-xBwKFNgKW1a7NP82SIGq2GDI55m6/image.png" width="320" />
