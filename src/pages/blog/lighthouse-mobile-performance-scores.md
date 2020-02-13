---
templateKey: blog-post
title: Lighthouse Mobile Performance Scores
featuredimage: /img/blog-banner-lighthouse.jpg
date: 2019-11-12T16:04:10.000Z
featuredpost: true
description: >-
  Lighthouse scores for popular mobile commerce sites 
  (Photo by Paulius Dragunas on Unsplash)
tags:
  - performance
  - mobile
  - ux
---

### Mobile Performance
In 2016 our team was releasing a [mobile ecommerce web app](/work/mobile-ecommerce/), and my development team was assigned to help with performance optimization. During this process, I learned a great deal about metrics, optimization, and how difficult it can be to deliver a mobile experience that performs. Our CIO had quite confidently communicated to our stakeholders that our new platform would deliver pages in less than one second.  Although the threshold seemed to be a bit of internal marketing, and everyone had assumed this time came with caveats, (aggressive caching, low network latency, etc.) it would still be a challenging target to hit. 


### Google Lighthouse Audit Tool
In 2016, I think [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) was still a browser extension, but since then it has been integrated into Chrome Developer tools. While Lighthouse is based on a simulated device using a throttled network and CPU slowdown, it still seems like the most *practical* way to check a mobile site for performance best practices, and provides a reasonable approximation of real world load times.  Additionally, Lighthouse provides scores on Accessibility, Best Practices, SEO, while providing a checklist for PWA optimization.

While looking into the performance of our team's mobile site, I believe we consistently scored in the 40-50 range on performance  measure within Lighthouse. Without context, this seemed like a terrible measure, especially since we had already corrected many of the low-hanging issues. I decided to do some research on other mobile commerce sites just to see where we compared, and I was pretty surprised by how poor some of the major players were scoring.

### Popular Mobile Site Scores
Fast-forward four years, and I thought there would be a considerable improvement in the performance scores given the rising share of mobile transactions. For the most part, I was wrong. 

A few points about the results below:
- Scores were taken February 8-9, 2020
- Sites were selected semi-randomly (this seemed like a good cross section from the US)
- Are from one test audit (I did not run multiple audits)
- Capture the site home page
- Audit Settings:
  - Mobile Device
  - Simulated Slow 4G, 4x CPU Slowdown
  - Storage Cleared

For more information on how to read the scores, visit:   
👉 [Lighthouse Scoring Guide](https://developers.google.com/web/tools/lighthouse/v3/scoring)   
👉 [Lighthouse Score Weighting](https://docs.google.com/spreadsheets/d/1up5rxd4EMCoMaxH8cppcK1x76n6HLx0e7jxb0e0FXvc/edit#gid=0)


<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <img class="img" srcset="/img/lighthouse-amazon.png" alt="amazon lighthouse score image" />
    <img class="img" srcset="/img/lighthouse-walmart.png" alt="walmart lighthouse score image" />
    <img class="img" srcset="/img/lighthouse-rei.png" alt="rei lighthouse score image" />
    <img class="img" srcset="/img/lighthouse-walgreens.png" alt="walgreens lighthouse score image" />
    <img class="img" srcset="/img/lighthouse-homedepot.png" alt="home depot lighthouse score image" />
  </div>
</div>

First Contentful Paint, Speed Index, and Time to Interactive are performance score weighted 20%, 27%, 33% respectively. Here are the values:


|            | FCP   | SI    | TTI    |
|------------|-------|-------|--------|
| amazon     | 2.7s  | 4.1s  | 9.3s   |
| walmart    | 3.9s  | 7.4s  | 17.1s  |
| rei        | 3.9s  | 9.0s  | 22.0s  |
| walgreens  | 4.3s  | 12.6s | 25.5s  |
| home depot | 3.8s  | 11.6s | 28.0s  |
<small>**FCP** = First Content Paint **SI** = Speed Index **TTI**= Time to Interactive</small>

### What is Going On?
Why, what is slowing down these sites, major causes...

### APAC Sites
Do Asia sites value performance more? Why ? What are they doing differently?

### Review
Identify is first step. Are companies ignoring mobile web? 

<table></table>