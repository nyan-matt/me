---
templateKey: work-post
title: Seven Habits PWA
date: 2019-08-01T00:00:00.000Z
description: Personal project 
workdate: '2019'
featuredpost: true
featuredimage: /img/work-banner-7-habits.png
cardimage: /img/card-work-7habits.png
cardcolor: '#5BB75B'
summary: >
  This personal project was created to help quickly recall Steven Covey's *7 Habits of Highly Effective People*. In addition to the book's content which provides a nice framework for getting things done, it happened to be a good source of ready-made content I could use to explore static site generation and progressive web apps.  
roles: >
  For this side project created during 1904labs innovation hours, I created a very simple design, and spent most of my time learning about [Gatsby](https://www.gatsbyjs.org/) and [Netlify](https://www.netlify.com/).


learning: | 
  #### Retro
  I still use this app at least once a week, and although I don't think the Blog posting features are being utilized, I learned quite a lot about "JAMstack" tools, and really like the features offered by Netlify. The ease of setup inspired me to refactor my personal site into a static site using Netlify's CMS tools. 
tags:
  - JAMstack
  - 7 Habits
  - Netlify
  - Gatsby
  - React
  - PWA
---
### About
The *7 Habits of Highly Effective People* serves as the company handbook at 1904labs. While I have read the book, sometimes I would hear people reference a habit number in conversation, and I had a difficult time putting those habit numbers to the idea. To help me recall the habits, I wanted to create a quick reference "cheat sheet". This aligned well with a desire to learn more about static site generators and progressive web apps.   

For this simple proof-of-concept, I wanted a PWA (with offline support) that could present each habit with short description & reminder of the core idea. The user can quickly jump to any of the 7 habits or use them as flashcards for memorization. 

### Design
Because content is at the center of this application, I wanted a clean distraction-free experience that would be easy to navigate. The primary user of this application would be me, however, I thought it could also provide value to others within the company. For this reason, I used a 1904labs color palette and design elements in case it was to be adopted by others beyond myself.

### Technology Stack
This project embraces the "JAMstack" which is an umbrella term that references using Javascript, APIs, & Markup to create highly performant, secure, cacheable sites that typically use static generation to create the site, its routes, assets, and HTML during a build step rather than making those calls dynamically at run time. Coupled with a good CI/CD process, it fills a niche for smaller-scale projects such as marketing sites, blogs, documentation, etc.ites, blogs, documentation, etc.

For more information, see https://jamstack.org/

While there are various technologies and tools available, this project is using:

- React
- Gatsby
- GraphQL
- Netlify (Build / Deploy + CMS)
- PWA (offline support, service worker, installable)
- Github repo: https://github.com/nyan-matt/seven-habits-gatsby-netlify

One of the advantages to "JAMstack" sites is the performance. Because this site is sparse in terms of data and assets, I would expect it to perform reasonably well regardless of the technology used, but given the content management capabilities (see below) the Lighthouse score below would be difficult to acheive using traditional CMS implementations such as Wordpress, Drupal, etc.


<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <h6 class="">Lighthouse Audit <small>(Simulated Slow 4G, 4x CPU Slowdown)</small></h6>
    <img class="img" srcset="/img/card-work-7habits-lighthouse.png" alt="Google Lighthouse Edit" />
  </div>
</div>

### Managing Content
Gatsby and other static site generators don't require a content management system. Because content is usually co-located with source code in a git repository, it could be a challenge to get content authors onboard with understanding git workflows and commands, however, there are tools like Netlify CMS that can be integrated  into your repository and expose content for editing/creation through a simple web interface. Each collection type can be configured through a <a href="https://github.com/nyan-matt/seven-habits-gatsby-netlify/blob/master/static/admin/config.yml">YAML file</a> to generate a schema used to map data to the editor.

Initially, I didn't expect to use any sort of CMS for this project since there was so little content. However, once in development, I wanted to include a way for non-technical contributors to add blog posts that are tagged with a habit. This would allow for anyone to provide examples of habits in action (i.e., an applied example of a habit). These tagged blog posts would appear below the habit's main idea with supporting examples of the habit from everyday life.

For more information, see https://www.netlifycms.org/ 


<div class="columns is-centered has-margin-top-32">
  <div class="column is-6 has-text-centered">
    <img class="img" srcset="/img/card-work-7habits-cms-1.jpg" alt="Netlify CMS Collection" />
  </div>
  <div class="column is-6 has-text-centered">
    <img class="img" srcset="/img/card-work-7habits-cms-2.jpg" alt="Netlify CMS Page Editing" />
  </div>
</div>