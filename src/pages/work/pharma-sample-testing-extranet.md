---
templateKey: work-post
title: Pharma Testing Service Portal 
date: 2016-02-01T23:39:48.643Z
description: Web application to submit samples, track studies, and manage projects
workdate: '2015-2016'
featuredpost: true
featuredimage: /img/work-banner-inet-1.png
cardimage: /img/card-work-inet-1.png
cardcolor: '#1582AA'
summary: >
  This project included a complete overhaul of an existing portal used by BioReliance and their customers to manage biological and toxicology testing services. The user experience was revamped to support better workflows and include requested features from business and end-users, while the technology was completely re-written in a modern stack using restful APIs, middleware, and React front-end.     
  
  
  This partnership between Business and IT teams supported the goal of making the iNet portal a best-in-class experience – become a competitive advantage for the company and drive customer loyalty.
  
roles: >
  Manager User Experience Design & Front End Development   
  
  I led a team of User Experience and Front End Development teams during planning, design, and development phases, as well as throughout subsequent maintenance and feature releases.   

    - Worked with business owners to understand existing workflows, capabilities, processes
    - Researched existing friction points and problem areas for business and end-users
    - Validated design concepts to improve user workflows while keeping business processes intact
    - Worked with back-end team to identify resources and plan API design
    - Maintained backlog, led sprint planning activities and agile ceremonies 



learning: | 
  #### Retro
  In the end, the iNet release was a success on many levels. First and foremost, for the customer, the new iNet represented a huge leap forward in their customer experience; allowing them to more easily and efficiently complete their tasks, while also serving as a positive touchpoint – reinforcing their trust and relationship with BioReliance. From an internal organizational perspective, our teams had completed a successful implementation of new platform architecture, solidified technology choices, and validated our approach going forward.

  ###### Internal Stakeholder Quote:
  > *There was no possible way the system could have been any better recieved. He said one sales rep was planning to go to CA next week to train their customer, but after using iNet they didn't think they needed to because the system was so intuitive. Several of the reps told him iNet was fantastic. He didn't hear one criticism.*   
  > –– Sr. Director of Program & Orders Management

tags:
  - SPA
  - React
  - GraphQL
  - Axure
---
### About
BioReliance offers biologic and toxicology testing services to pharma, biopharma, diagnostics, and other life science customers worldwide. It was acquired by Sigma-Aldrich in 2012, and in 2015, we began planning to replace its legacy extranet – iNet, with a modern solution while improving the user experience for internal and end-users.   

iNet is a web portal that provides BioReliance customers an interface to order assays, submit samples, and track study results for biologic and toxicology testing. iNet connects BioReliance customers with its internal project managers to manage the lifecycle of the project from submission through final results. iNet also includes an adminstration interface that provides tools for project managers, account managers, and other internal roles.


### Discovery & Research
In order to understand the current application, the UX team did extensive research with internal BioReliance resources to understand the business, its processes, and to map out how users interacted with both the tool and other users from within and outside of their respective organizations.  Testing and submission configurations were very complex, and many of the requirements and processes were not well documented - this led to an extended discovery phase which included various workshops with project stakeholders. Although we did usability test our designs with external users, we primarily worked with internal users of the system as our proxy for both user types during the discovery & requirements phases of the project.

Because of the myriad of submission configurations, and lack of formal documentation of the old system, the process for understanding all the interdepencies was a tedious process that required a true team effort in clearly defining and communicating requirements. To capture these requirements and interdependencies, our UX team began capturing the screens in flows in an interactive Axure prototype. This prototype became a living document that was used among all the key stakeholders to deliver a shared understanding of what was to be built; allowing team members to comment, discuss, and collaborate.

The relationship between external customers and their internal project manager is very collaborative, and parts of that process are very high touch. Our challenge was to help facilitate those high value, human-to-human interactions, while automating the low value, "busy work" tasks.

### Design & Experience
In addition to some basic heuristic improvements, we revamped the submission workflow, and identified several new features for both internal and external users of the sytem.    

One of the major pain points in the old system was the inflexible nature of submission creation – due to the highly regulated nature of the business, external users could be required to fill out hundreds of form fields in various submission steps. In many cases, the user would not have all the required information upfront, and due to the legacy system's rigidity, the user may have been blocked from starting the submission process, or in the worst case, may have lost work once a submission was started.   

The submision workflow was redesigned to allow external users to enter submission data piecemeal, based on the information available to them at the time. This move to design the workflow around the user's need rather than an arbitrary system requirement allowed users to work more efficiently. It also prevented users from tedious submission sessions in which they felt obliged to complete the form in one sitting or fear that they may be missing some key information needed to finish the process. In addition to changing the submission workflow, we also designed an auto-save functionality that would mitigate the risk of losing data. 

A multi-step form with dozens, and possibly hundreds of fields can be quite challenging to validate, both on the client and server. We worked closely with the backend team to create a robust error handling mechanism that provided visibility of submission status to the user with clearly worded errors and visual cues to help in resolution.  

###### End User Quote:
>*So far I’m loving iNet plus. One feature that is quite helpful is the fact that it AutoSaves as a draft during entry. I had the former iNet time out on me quite often which led me to have to re-enter many times. I also like how it highlights corrections that need to be made prior to submission and once that correction is made it returns to normal. This visual cue is quite helpful.*   
>  –– Catalent Customer

Upgrading the submission experience was a major part of our redesign, but we also designed and implemented numerous capabilities including:

  - Improvements in user management including self-serve password resets and organizational user management
  - Creation and management of submission templates
  - Organization-specific assay search and assay favorite lists 
  - Study tracking, reporting, and sharing
  - Calendar and task lists 
  - Project management capabilities including secure document uploads

<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <img class="img" srcset="/img/card-work-inet-desktop-1.jpg" alt="iNet on laptop" />
  </div>
</div>

### Technology & Development
This project was the first non-trivial implementation of a new architecture pattern adopted by our development organization. The new pattern used restful APIs to expose services to be consumed by a front end "presentation layer". Rewriting the iNet app to use a service-oriented architecture required a thorough understanding of the various resources and their relationships to one another. Because the legacy system lacked formal documentation, the resource relationships were teased out of the design requirements and prototypes being created by the UX team. The development team (front and back end) actively participated in the design workshops to gain understanding of the underlying data models and requirements.

Because we worked iteratively, on several occasions backend resources needed to be refactored after new data relationships were uncovered. This gradual reveal posed many challenges for the backend teams as they worked to assemble a jigsaw puzzle that was sometimes missing key pieces.   

Another challenge with some restful architectures is the number of round trip requests it takes to assemble the data to display a page that may be a composite view of multiple resources. Initially our team had used a more traditional stack of Ruby on Rails along with a heavy use of client-side DOM manipulations to handle page interactions. In this model the initial page is built on the server and, when completed, is sent to the browser for rendering, and client side manipulation of the DOM is processed imperatively by relying on element IDs or class names. 

As we learned more of the complex relationships among the data resources, it became clear that these round trip requests (all done on the server in sequence) would not be an acceptable experience in terms of performance, and maintenance of all the DOM manipulations required a massive effort to keep ids and class names in sync.

As we studied this technical problem, it became apparent there was a need for:
  - Asynchronous requests made in parallel
  - The ability to offload these requests to the client to ensure a more performant experience
  - More control over client side manipulations without the fragility of imperative DOM manipulation

<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <img class="img" srcset="/img/card-work-inet-mobile.jpg" alt="iNet mobile" />
  </div>
</div>

While Node had been around for awhile, it seemed that in 2015 it was gaining more mainstream appeal due to its asynchonous, event driven architecture. This aligned well with our need to handle all of the n+1 requests required in our application. While moving to Node could dramatically improve our roundtrip performance issues, we still needed to client-side solution as we offloaded things from the server side to the client. DOM manipulation with jQuery was prone to errors and hard to organize, Angular was fairly popular at this time, but there were uncertainty with its release versioning and we were looking for a solution that could be re-used in other applications which required server-side rendering for search engine optimization. React was new on the scene, but seemed very promising with its small footprint (compared with Angular), the availability of writing in ES5 with the upstart ecosystem including Babel & Webpack. To cement the decision, we developed a  very successful proof-of-concept written in React and utilizing the new GraphQL specification to help proxy our data the data we needed from our disparate APIs to replace our initial RoR implementation.

As we switched over to the Node & React stack, we encountered the growing pains that come along with a new technology; best practices and patterns were still emerging, it was not as easy to find resources proficient in ES5 syntax and React as traditional front end developers, and we generally were making things up as we went. Even with these challenges, we were deliving a better product much faster than before. We eventually refactored pieces of the code base as we built consensus on style and best practices, and although we evolved our approach as improvements to individual libraries and design patterns were released, we continued to rely on this stack as a core foundation in projects going forward. 

###### Videos & Screencasts
For more information, please check out the linked videos to see a demonstraton of iNet capabilities:

  - [Homepage Screen](http://assets.sial.com/deepweb/assets/inet/marketing/other/v/3/iNet-Video-1-Homepage-Screen-v3/iNet-Video-1-Homepage-Screen-v3_720p.mp4)
  - [iNet Overview](http://assets.sial.com/deepweb/assets/bioreliance/marketing/other/v/2/iNet-Video-2-iNet-Overview-v2/iNet-Video-2-iNet-Overview-v2_720p.mp4)
  - [Assay Information](http://assets.sial.com/deepweb/assets/bioreliance/marketing/other/v/3/iNet-Video-3-Assay-Information-v3/iNet-Video-3-Assay-Information-v3_720p.mp4)
  - [Submissions and Templates](http://assets.sial.com/deepweb/assets/bioreliance/marketing/other/v/2/iNet-Video-4-Submissions-and-Templates-v2/iNet-Video-4-Submissions-and-Templates-v2_720p.mp4)
  - [Study and Report Tracker](https://www.bioreliance.com/assets/deepweb/assets/bioreliance/marketing/other/v/2/iNet-Video-5-Study-and-Report-Tracker-v2/iNet-Video-5-Study-and-Report-Tracker-v2_720p.mp4)
  - [Custom Projects](http://assets.sial.com/deepweb/assets/bioreliance/marketing/other/v/3/iNet-Video-6-Custom-Projects-v3/iNet-Video-6-Custom-Projects-v3_720p.mp4)