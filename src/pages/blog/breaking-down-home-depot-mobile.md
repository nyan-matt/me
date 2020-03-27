---
templateKey: blog-post
title: Breaking Down Home Depot Mobile Performance
featuredimage: /img/lighthouse-homedepot.png
date: 2019-11-12T16:04:10.000Z
featuredpost: false
description: >-
  Taking a closer look at an mobile performance 
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

For more information on how to read the scores, visit:   
👉 [Lighthouse Scoring Guide](https://developers.google.com/web/tools/lighthouse/v3/scoring)   
👉 [Lighthouse Score Weighting](https://docs.google.com/spreadsheets/d/1up5rxd4EMCoMaxH8cppcK1x76n6HLx0e7jxb0e0FXvc/edit#gid=0)


### What is Going On?
Perhaps if we take a more detailed look at the specifics, we can understand what is causing the issue and be more performance-aware going forward.

I'm not picking on Home Depot, I'm sure they have wonderful engineers and designers who care about performance and speed, but let's just say there is a lot of room for improvement. Home Depot's Time to Interactive (TTI) comes in at nearly 30 seconds, about 3x as long as our best performer, Amazon.

If we look under the hood, we can see that the mobile home page comes in at a hefty 6 Mb. Keep in mind this is the **compressed** size transferred. Uncompressed size totals around 12 Mb.

Javascript and image requests make up the vast majority of resource requests in terms of size.   

| Type       | Size          |
|------------|---------------|
| JS         | 1.7 Mb        |
| IMG        | 4.2 Mb        |
| CSS        | 48 Kb         |
| All Others | ⪅ 100Kb each  |

Since javascript bloat tends to be a pretty widespread issue, let's look at that 1.7 Mb of javascript. There are 48 requests for js files from around 20 different domains. The image below displays 20 largest sorted by size. 

<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <img class="img" srcset="/img/blog-thd-js.png" alt="home depot js requests" />
  </div>
</div>



