---
templateKey: work-post
title: Mobile eCommerce Web Application
date: 2016-12-31T15:04:10.000Z
description: Mobile ecommerce webapp for APAC regions (Sigma-Aldrich / MilliporeSigma)
workdate: '2016'
featuredpost: true
featuredimage: /img/work-banner-mobile-ecom.png
cardimage: /img/card-work-mobile-ecom.png
cardcolor: '#F2C750'
summary: >
  This project was part of a larger effort to modernize a legacy ecommerce platform which included breaking down a large monolith into a service-oriented architecture with an emphasis on modularity, performance, and security. For this MVP, our goals were to deliver a fast, user-friendly mobile application for our APAC customers while exercising the new platform architecture in a lower risk environment.  

  
  The mobile site went live in 2016, and was available for mobile users in China, Singapore, S Korea, India, as well as a handful of other countries in the region. The progressive web app supports basic commerce and search functionality as well as profile and order management. 
  
roles: >
  Manager User Experience Design & Front End Development  
  
  I led a team of UX Designers and Front End Developers during planning, development, and through launch activities

    - Scoping & requirements 
      - Worked with IT Business Partner, Functional Analysts, QA, and Backend development teams
    - Managed backlog and agile ceremonies
    - Front end advocate for restful API design
    
showcase1:
  height: 400
  backgroundimage: /img/featured-work-mobile-headers.png
  fixed: false
showcase2:
  height: 400
  backgroundimage: /img/featured-work-ecom-mobile-1.jpg
  fixed: true
  
learning: |
  #### Retro
  From a technical perspective, I think the project succeeded in terms of flushing out problem areas and it was beneficial to see how teams and processes could work more efficiently. As we looked forward to larger more complex projects, it was helpful to go through this "dry run" in a lower risk environment. I definitely leveled up my technical knowledge while working on this project, mostly due to the great people on my team. 
  
  From a customer perspective, we delivered a usable product – a definite improvement on the previous mobile solution, however, because the real audience for this project was internal, I'm not sure that end users would have asked for the solution that was built.  


tags:
  - mobile
  - ecommerce
  - PWA
  - API
  - app
---
### Minimally Viable Product (MVP)
This project was part of a larger effort to modernize an ecommerce platform - moving from a proprietary, monolithic architecture to an open-source, service-oriented architecture. Overhauling a [billion dollar ecommerce channel](https://www.digitalcommerce360.com/2017/11/13/e-commerce-comes-strong-mercks-milliporesigma/) comes with risks, and to help mitigate a big-bang release approach, this project was undertaken to work as a proof-of-concept for the new architecture, while providing a mobile precense for the fast growing Asia Pacific market. Historically, the vast majority of global transactions occur on a desktop browser through our B2B or B2C ecommerce channel, with many of our users in a lab environment. An existing mobile site offered a very basic product search capability, but was in need of an update. Because the new ecommerce platform was dependent on a parallel ERP upgrade (which typically released country-by-country) we decided to geo-target the new mobile site for  countries in the APAC region that were using the new ERP system.     

Over the years, our legacy system had added hundreds of features and capabilities; some specific to countries, organizations, user types, or some combination of thereof. While eventually support for these legacy features in the new platform may be needed, our immediate goal was to release a baseline version for mobile use cases that supported:
  - Account management (register, login, profile management)
  - Product search & filtering  (product name, CAS number, product attributes)
  - Access to product data including supporting documentation (certificates of origin/analysis & safety data sheets)
  - Purchasing (cart management, purchase order payments)
  - Order management/tracking
  - Product recommendations / cross selling   

In addition to offering the above functionality through a mobile web experience, we also wrapped the web application in a Cordova application with a barcode scanning functionality. (See screencast below)

### Design
As with many projects on a tight schedule, user research was not included in this effort which was largely driven by IT as an exercise to test teams, processes, and architecture with a release into a live environment. Although our team had conducted numerous research studies and usability tests on the desktop version of the site, we did not have any specific research on mobile users in the APAC region at the time we started this project.   

In lieu of formal user research, we fell back to looking at analytics and qualitative data from our existing site to look for pain points and areas of improvement as we considered mobile use cases for our existing journey map and personas. We also leaned heavily on best practices in the mobile commerce space with some anecdotal feedback from our business partners in target countries. 

From a branding and visual design perspective, Sigma-Aldrich was going through an aquisition integration, and while a [global identity re-branding](https://www.underconsideration.com/brandnew/archives/new_logo_and_identity_for_merck_kgaa_darmstadt_germany_by_futurebrand.php) had been rolled out, a digital style guide or design system was not yet available. To that end, we worked to incorporate the new branding elements into the mobile design while trying to use discretion and provide some flexibility for future adaptation.   

### Development
Our small front-end development team  worked in tandem with various backend service teams, our UX group, QA, operations, and funtional analysts on development of the site. Backend teams had varying levels of maturity in restful API design, so we worked closely with them on the APIs to ensure they followed restful design conventions, met the functional requirements, and tried to help guide their architecture from UI-specific endpoints to UI agnostic API resources.   

We used a modern stack including React with server-side rendering, Redux for state management, and GraphQL as a sort of proxy layer to java-based API endpoints. We also utilized React Intl for localization / and internationalization, and Jest + Enzyme for testing. 

### Performance
One of the biggest pain points for APAC users was site performance. In the legacy platform, APAC traffic made a round trip back to North America in most cases, and this latency often caused unacceptable load times and a terrible end user experience. In the new platform, most data is is distributed to local data centers, with only a few transactional requests that need to go back to an ERP sitting in North America or Europe. Our target load time for this project was ≤ 1 second (broadband connection) which we were able to achieve in many circumstances. 

<div class="columns is-centered has-margin-top-32">
  <div class="column is-4 has-text-centered">
    <h6 class="">Screencast 2x</h6>
    <video width="320px" src="/img/mobile-ecom-2x.mov" controls=""></video>
  </div>
  <div class="column is-8 has-text-centered">
    <h6 class="">Lighthouse Audit <small>(Simulated Slow 4G, 4x CPU Slowdown)</small></h6>
    <img class="img" srcset="/img/card-work-lighthouse-ecom-2.png" alt="lighthouse audit score" />
  </div>
</div>

Beyond the performance of the APIs we consumed, we were able to improve our front end performance by chunking our js files, preloading requests, using service workers to cache static assets, and enable brotli compression for significantly smaller files over gzip.   

Google Lighthouse has been a great tool to gauge performance by easily allowing developers and designers to simulate a mobile experience and offering performance improvement suggestions. As we started to benchmark our performance against other popular mobile commerce sites, I was surprised to see how [poorly most of those sites performed](/blog/lighthouse-mobile-performance-scores). I am happy with the performance scores we were able to achieve given the time and resource constraints for this project.   

Some other notes from the lighthouse audit: 
  - Accessibility has easy fixes that were not implemented but should have been. 
  - Site indexing was intentionally blocked by request of digital marketing team
  - Performance numbers are based on simulated network and CPU conditions. 


