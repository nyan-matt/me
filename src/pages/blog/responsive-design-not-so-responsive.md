---
templateKey: blog-post
title: Responsive Design Not So Responsive
featuredimage: /img/lighthouse-homedepot.png
date: 2019-11-12T16:04:10.000Z
featuredpost: false
description: >-
  Making sure your responsive design actually responds 
  (Photo by Paulius Dragunas on Unsplash)
tags:
  - performance
  - mobile
  - ux
---

### Quick Recap
In a previous post, I looked at [Lighthouse Mobile Performance Scores](/blog/lighthouse-mobile-performance-scores/) for popular ecommerce sites. From the examples scores, the Home Depot site seemed like an interesting case to explore.

<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <img class="img" srcset="/img/lighthouse-homedepot.png" alt="home depot lighthouse score image" />
  </div>
</div> 

### Responsive Irony
Responsive design patterns [which gained popularity 2012-2014](https://trends.google.com/trends/explore?date=2010-02-16%202020-02-16&q=responsive%20design) stressed the advantages of a single code base in which UI elements would respond to the user's viewport in order to provide an optimal experience for mobile, tablet, and desktop users. This was a shift in thinking from the prior practice of tailoring a unique mobile experience which often involved a separate code base and often a stripped-down version of site functionality. 

While responsive design certainly did wonders to improve certain aspects of the mobile user's experience, its implementation often came at the cost of mobile performance. If not carefully executed, mobile users were frequently downloading the same resources as their desktop counterparts; full size, non-optimized images, bloated javascript and css assets, all of which were neatly concealed under css media queries that made the site *look* mobile friendly, but these sites were far from responsive in the sense that they often take 10+ seconds to become interactive.

While the sites sampled above are using varying degrees of responsive design (returning slightly to completely different document structures for mobile and desktop) it's worth noting the huge payloads and the dual usage of the same address for both mobile and desktop traffic.


