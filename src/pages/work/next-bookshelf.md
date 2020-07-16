---
templateKey: work-post
title: Next Bookshelf Prototype
date: 2020-07-08T00:00:00.000Z
description: Concept application for managing favorite books with Next.js, FaunaDB, and Tailwind 
workdate: '2020'
featuredpost: true
featuredimage: /img/work-banner-next-books.png
cardimage: /img/card-work-next-bookshelf.png
cardcolor: '#f95c2b'
summary: >
  This **[personal project](https://next-book-gql.now.sh)** goal was to learn more about [Next.js](https://nextjs.org), [React hooks](https://reactjs.org/docs/hooks-intro.html), and explore serverless backend providers to create a web application to manage and share favorite book titles.
roles: >
  As a side project created during 1904labs innovation hours, I designed, developed, and deployed the Next Bookshelf concept application. 


learning: | 
  #### Retro
  For this project, it was my first interaction with Next, Fauna, Tailwind, and Auth0 - quite a few new tools to take on at once. Although the functionality is not overly-complex, it was enough to familiarize myself with basic concepts and provided the right amount of non-trivial problems to solve. There are still more items on the todo list, but I'm generally happy with how it turned out. 
tags:
  - JAMstack
  - Vercel
  - Next.js
  - FaunaDB
  - Tailwind
  - GraphQL
  - React
  - Auth0
---
### About
I came across a Sam Selikoff's [video on Buildng my first Next.js app](https://www.youtube.com/watch?v=Z0FUBQPXHMA), and really liked the idea of having a kind of boilerplate CRUD app (in his example, a recipe app) that you might rebuild with different front end stacks.   

I think around that time, I had watched a couple sessions from React Europe, one of which covered the [Next.js 9.4 release](https://www.youtube.com/watch?v=UD98x-2mido). In the past, I have used Gatsby, but had yet to look at Next, and so I decided to spin up a `create-next-app` instance and see what I could do.

### Design
While I spent a fair amount of time on the design, it wasn't primary to what I was trying to learn. Because the site is faily limited in scope, I didn't have to think about too much. In terms of design, I ended up with only a handful of page types:
 - [Home/landing](https://book-next-gql.now.sh)
 - [Bookshelf (My Books)](https://book-next-gql.now.sh/bookshelf)
 - [Book detail](https://book-next-gql.now.sh/book/266501747202064916) 
 - [Add book form](https://book-next-gql.now.sh/add)
 - [Content/about](https://book-next-gql.now.sh/about) 

I did want to experiment with dark mode and site theming, so I added a theme toggle control.

<div class="columns is-centered has-margin-top-32">
  <div class="column is-6 has-text-centered">
    <img class="img" srcset="/img/card-next-home-dark.jpg" alt="screenshot home page dark mode" />
  </div>
  <div class="column is-6 has-text-centered">
    <img class="img" srcset="/img/card-next-home-light.jpg" alt="screenshot home page light mode" />
  </div>
</div>

Choosing a colors for each theme is more difficult than I initially considered - even when using a restricted palette, designing for adequate color contrast is challenging. I still have a few unresolved contrast issues in the design. 

At risk of looking similar to other sites, I used open source illustrations from [Undraw](https://undraw.co) - some with slight modifications. Undraw fills such a primary need that was neglected for so long - free open source artwork.  

<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <img class="img" srcset="/img/card-next-mobile.jpg" alt="collection of mobile screenshots" />
  </div>
</div>





### Technology Stack

#### Next.js
Prerendered, static sites have gained momentum in the past 2-3 years, filling a niche and providing improved performance and developer experience for use cases involving, well... static content. Documentation, brochureware, etc, are great candidates for Gatsby or Next, but I think they are increasingly catching on in cases where we might have used a traditional SPA pattern for more interactive experiences without the bloat.   

Features like [Incremental Static Regeneration](https://nextjs.org/blog/next-9-4#incremental-static-regeneration-beta) and [Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes) include the best features of statically rendered sites with the flexibility to generate dynamic content at runtime.

##### (Continuous) Deployment
As this was my first time using Next.js, it was also my first time using the [Vercel deployment](https://vercel.com/) platform. I love using Netlify, so my expectations were high.   

It was fairly easy to setup, and now whenever I push to master, my app is built in less than a minute. I also liked that branch deploys were active with zero configuration. Nice! 

#### FaunaDB / GraphQL
I didn't start with Fauna as my backend - I actually started with Hasura. I ran into some problems designing and configuring my database (mostly because I'm not really experienced doing so) and I wasn't quite sure how to setup foreign key relationships in Postgres so that I could access them via GraphQL relations. I've heard good things about Hasura, so I chalk this up my lack of determination 😅   

I hate to say it, but I think I tried [FaunaDB](https://fauna.com/) because they had been running a lot of promoted tweets during this time. In any case, Fauna setup "clicked" for me, maybe because you can start with a graphql schema, and once I realized you could create indexes with custom search fields, I felt comfortable setting up what I needed for this app.

#### Tailwind
This was my first time using [tailwind css](https://tailwindcss.com/), and I like the utility-first concept. Boostrap and Bulma are nice, but I would often supplement those base styles with sass spacing utilities. It can get a little repetitive, but you can always [extract your own components](https://tailwindcss.com/docs/extracting-components/), or add your own styles.   

I began this project using theme-ui, a css-in-js jsx framework with its own components package. Initially I wasn't a huge fan of css-in-js as I found it hard to read. After a few days I got used to it, and enjoyed the flexibility. I could not get what I wanted out of the theme-ui components, so eventually I scrapped the whole thing, and converted to tailwind.

#### Authentication
[Auth0](https://auth0.com) via [react-use-auth](https://github.com/Swizec/useAuth).   

🚨 Bug alert: If you are using Chrome, and are blocking 3rd party cookies, a hard refresh will log you out of the session 😱   

There is an open issue with the useAuth package - if I can't figure out a workaround, I might look at another authentication mechanism. If anyone has experience with auth0 and/or useAuth, please let me know!

### TODOs
- General cleanup, abstract filtering, etc.
- Edit a book entry
- Delete a book entry
- View bookshelf of another user (e.g., /bookshelf/:user
- Make theme choice persistent across hard page reloads; read from prefers-color-scheme setting
- Reading lists
- "Like" a book
- Tests
- Resolve accessibility concerns
- Create new tag(s) on the fly
- Search by title, author
- PWA
- Update meta tags title/description on route change 
