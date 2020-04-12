---
templateKey: blog-post
title: Performance is a (Big) Part of UX
featuredimage: /img/blog-banner-performance.jpg
date: 2019-02-01T16:04:10.000Z
featuredpost: true
description: >-
  UX designers need to care (a lot) about performance
  (Photo by Veri Ivanova on Unsplash)
tags:
  - performance
  - mobile
  - UX
---

### Performance 
Performance (speed) is one of the most overlooked part of the user experience even though we know it plays an outsized role in how people interact with and perceive our website, app, or service. In many organizations, this metric is often orphaned without an accountable owner and only commands attention when problems arise. Unfortunately, if performance is only considered when it becomes a problem, (especially in a later stage of the product development lifecycle) it can be very difficult to remedy and leaves teams scrambling to find a solution.   

Teams don't purposefully decide to build a slow performing product, instead it's often a confluence of several factors which could include:
- Leadership doesn't prioritize or communicate its importance
- Users may not vocalize performance as an explicit requirement
- Designers may view performance as a technical issue which falls outside their purview
- Agile teams first priority is a working feature or software - it takes discipline to prioritize optimization or refactoring ahead of new feature development
- There is a conflation between premature optimization and designing for performance
- The system is only as fast as it's slowest dependency - that is, if a primary feature or service is dependent on a slow performing system, that bottleneck is magnified and overshadows other more performant systems

In modern software development and architecture, system performance can be dependent on several independent micro-services which are often developed separately. While each service's performance can be measured by itself, the system performance (as experienced by an end user) is usually only apparent when systems are integrated and practical factors such as network latency are introduced.  

### Squeaky Wheels
The challenge is elevating this important metric to be top-of-mind for everyone, not just an hastliy added line item in a non-functional requirements document. Although UX design practices may not have direct control over architectural decisions, development choices, or backend systems, we can help by choosing to make performance a primary part of our rubrics, scorecards, and measurements. If we design with performance in mind, we help advocate for an important part of the end user experience.


- Talk with your teams about adopting a [performance budget](https://timkadlec.com/2013/01/setting-a-performance-budget/)
- Be mindful of the performance impact of your design choices - get into the habit of talking through these with your dev and product owners so that you can make informed decisions
- Get off your desktop, and test your designs early with different devices and slower network speeds. Tools like [Google's Lighthouse](https://developers.google.com/web/tools/lighthouse) can provide a good simulation of throttled CPU and network speeds.

Globally, the average mobile connection speed is around 25Mbps; while this has substantially improved in the last 3 years, average page weights have also increased. Designing for low bandwidth can provide a competitive advantage in a better UX, but it's also a good inclusive design practice to respect users' battery and data usage.

If your product relies on organic search results, you may find allies in your digital marketing organization. Google uses site speed as one of the factors its algorithm uses to rank pages. 

### Reading

- [Setting a web performance budget](https://www.invisionapp.com/inside-design/setting-a-web-performance-budget/)
- [Good performance is good design](https://uxplanet.org/good-performance-is-good-design-the-5-principles-of-performant-design-54ca44c7c4e0)
- [Why performance matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters)