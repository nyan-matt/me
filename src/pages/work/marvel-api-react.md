---
templateKey: work-post
title: Marvel API React
date: 2017-05-01T23:39:48.643Z
description: Personal project 
workdate: '2017'
featuredpost: true
featuredimage: /img/work-banner-marvel.png
cardimage: /img/card-work-marvel.png
cardcolor: '#62A0A5'
summary: >
  This personal project was created to help teach myself the basics of working with React and client-side data fetching using a public API.  
roles: >
  For this side project, I spend the majority of my time learning about React and exploring Marvel's public API. The basic design is based on bootstrap with minimal customization.


learning: | 
  #### Retro
  All data is fetched client-side via react lifecycle methods, stored in local state, and passed down to rendering components. No tests exist, and there are probably too many bugs to count, but I did become (at least a little) familiar with React and had a little fun along the way.
tags:
  - React
  - API
  - Netlify
---
### About
I created this personal project based on the desire to teach myself how to use React with an external API datasource. At the time, I needed some hands-on time with React which had been adopted by our development team, and Marvel provided a robust public API to use for content. As a bonus, the API also provided imagery which helps make a proof-of-concept project like this more interesting.


### Characters, Comics, & Series
The functionality was largely driven by what the [API provided](https://developer.marvel.com/docs) including resources for Characters, Comics, & Series. For each of these resource types, I wanted to provide a browse/search capability, render the results, and link to resource's details.   

The Marvel API supports relationship lookups among characters, the comics they appear in, and the series to which the comic belongs. Similarly, one could also lookup characters appearing in a comic, or comics appearing in a series. The UI provides the mechanism for browsing the relationships with two basic layouts; a search & result page along with a detail page.

<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <img class="img" srcset="/img/card-work-marvel-desktop.gif" alt="animated gif desktop search" />
  </div>
</div>

### Technology
This project was started with [`create-react-app`](https://github.com/facebook/create-react-app)
and extended via [`custom-react-scripts`](https://github.com/kitze/custom-react-scripts). I used base Boostrap styles (mostly for the Grid layout) with a few custom styles. 

The [project directory structure](https://github.com/nyan-matt/marvel-api-react) is probably overly complex for such a small project, but I think it was fairly typical of React projects that followed the "Smart Container" & "Dumb Component" pattern popular at the time.  This pattern essentially used class components for data fetching and logic which passed props to "dumb" child components which were usually stateless.   

The app is built and deployed on a netlify CDN.

<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <img class="img" srcset="/img/card-work-marvel-mobile-2.gif" alt="animated gif mobile" />
  </div>
</div>

