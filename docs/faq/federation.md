---
sidebar_position: 2
---

# 1. Why no federation?

This question comes around every now and then, a lot of people are curious why Revolt isn't federated, this page hopes to clarify that.

## Short Answer

In terms of **specification**, Revolt is meant to be an alternative to things like Discord and XMPP, not Matrix. Matrix does federation and does it well, we do not intend to compete with it.

In terms of **the situation**, we started the project when none of us even knew what federation was, so it was never even considered from the start. Although we have other reasons for not including it now as below.

## Long Technical Answer

This requires a bit of time to answer, hopefully everything can be answered here, if you have any questions feel free to ask on the Revolt testers server or [liase with me directly](https://insrt.uk).

### Complexity

Equality federation and Discord-style protocols are inherently incompatible, it would be a huge job to even begin to get it to play nicely together. Matrix-style equality federation requires non-finality of authorisation and a deterministic conflict resolution algorithm. XMPP-style master-slave federation is doable, but that would create inconsistent timeline views across users of a rooms connecting from different instances, which is a usability nightmare to begin with.

While our protocol could theoretically be changed, it would break virtually everything. The current API heavily relies on trusting the server and finality of event authorisation, and federating the entire API would be a huge pain as I will describe below.

### Time

The main Revolt team comprises of mainly students (17 to 19 years), and most of the work is done by me (insert) and I have just started my first year at university. I do not physically have the time to even consider planning out federation, it would likely require a complete rewrite of everything just due to the nature of how it has been designed, I want to get Revolt to a use-able state, federation will get in the way of that goal.

### Nobody actually wants it

This is the opinion part of the FAQ, I would like to ask you explicitly to not see this as an opportunity to dismiss the other **two points which hold significantly more weight** as I've seen some people do. The community and other developers have expressed that they don't actually see a benefit in having federation for Revolt, this is just our general opinion about the matter and I agree in the fact that it would probably just kill Revolt in the fact that the entire project would need to essentially be put on pause to implement this.

Previously I mentioned here that it would cause fragmentation, I would say that was not right, in fact it would be quite beneficial in allowing other instances to interact with the main server but we have alternative ideas which will allow us to bridge that gap. For example, single sign-on with the main instance, bridges between servers and so on.

Honorable mention:

<img src="https://autumn.revolt.chat/attachments/7mYMu8Rj0xvO0-xBwKFNgKW1a7NP82SIGq2GDI55m6/image.png" width="320" />
