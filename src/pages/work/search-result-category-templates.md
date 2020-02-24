---
templateKey: work-post
title: Search Result Category Templates
date: 2018-12-01T23:39:48.643Z
description: Category autosuggest & contextual search result templates
featuredpost: true
workdate: '2018'
featuredimage: /img/work-banner-category-suggest.png
cardimage: /img/card-work-lookahead-filters.png
cardcolor: '#F2C750'
summary: >
  This project goal was to improve the search experience on a leading life
  science ecommerce site. Our challenge was presenting more useful search
  results given a large catalog with diverse product segments for users who
  require specific product information to narrow their search.

    
roles: >
  User Experience & Front End Development Manager   


  Led the UX effort, interfaced with product management and business
  stakeholders as well as technical backend leads to identify scope,
  requirements, designs, and delivery schedule.
learning: >
  #### Retro

  Presenting relevant search results that effectively display the right product
  information is very challenging - especially when the product catalog contains
  a diverse set of product types. The problems encountered by users which were
  captured in various interviews and usability studies reinforced the analytical
  data showing that users largely ignore search filters, and were instead
  searching multiple times with different terms. Qualitatively, we also
  discovered that once a user was able to "dial-in" in a search term, they found
  it difficult to distinguish key differences in the results.   


  Based on the research, our team proposed designs to improve the
  discoverability of product category filters as well as a way to present more
  contextual data to the users based on the product type. Our goals were to
  increase filter usage and reduce pogo-sticking between search results and
  product pages. This effort involved various teams in the organization working
  together making changes to back end services, front end code, and product
  data. Internal stakeholders were happy with our results, but sadly, I can't
  remember the specific numbers we achieved in terms of our metrics since I left
  the organization. 
tags:
  - ecommerce
  - search
  - sketching
  - information architecture
---
### About

This project was initiated by business stakeholders based on a user research project in which customer groups were observed searching and shopping for products on our ecommerce channel as well as competitors. 

With a catalog approaching 300,000 products from a wide range of product categories and applications, it can be difficult to cater search results that support the diversified needs of users. Chemists, Biologists, Pharmaceutical Researchers, & Manufacturers all have different care-abouts, and use different types of product data for purchasing decisions. Because this product data can be very localized to a specific product category or application, users were having trouble identifying these key product attributes when sifting through search results.

### Research & Design

User research revealed that customers tended to be overly specific or general in their search terms. Often overwhelmed with the volume and noise associated with a results of an overly broad search term, users would ignore what they perceived as non-relevant filters, and proceed with a new search term that often overshot the mark, and failed to return the expected range of products the user expected.    

Filtering results by relevant product attribute types helps, but with a large catalog and somewhat overwhelming list of different attribute types, analytics revealved that filter usage in search result pages was greatly under-utilized. 

Since users rarely applied category filters to their results, one option we explored was to suggest categories in the typeahead search form results with the hope to increase the discoverability of relevant category filters which would return more relavent results based on a familiar category, technique, or application.   

<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <img class="img" srcset="/img/card-work-lookahead-suggest.jpg" alt="sketch concept category lookahead" />
  </div>
</div>

Product category suggestions in the search site's search lookahead could provide more visibility into a relevant scoped results for overly broad search terms. This pattern is implemented in other ecommerce sites, but was never considered in-house due to how product data was organized and indexed. We quickly learned that to implement a similar pattern, we would need to plan and orchestrate changes to our product information data as well as code.

Results from a scoped product category can provide result templates (column headers) that expose key attributes needed to make a purchase decision. 

<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <img class="img" srcset="/img/card-work-category-diagram.jpg" alt="flow diagram" />
  </div>
</div>

Category suggestions offered in our search form lookahead results had the potential to scope product results to a specific type of product or application, but the results would still be presented in a standard template that displayed a product number and a description field. The description field data usually displayed a string of keywords and data a product manager deemed important for a product, however this data could widely among similar products, and often concatenated data points into a long sentence that was difficult to compare to other products when scanning a search results page.   

<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <img class="img" srcset="/img/card-work-category-result-wireframes.jpg" alt="wireframes" />
  </div>
</div>

Because different product categories have distinct attributes that are important to users, we worked with product management teams to test a pattern in which search results could be templatized to highlight those key attributes, and allow users to more easily compare and scan those attributes among search results.  

<div class="columns is-centered has-margin-top-32">
  <div class="column is-12 has-text-centered">
    <img class="img" srcset="/img/card-work-category-result-template-1.jpg" alt="various result templates" />
  </div>
</div>

Rather than a wholesale change to all products, we implemented a scalable solution with a few product lines to configure attributes and templates for inclusion into search results. This allowed product managers to opt-in to these changes if they wanted to define and be responsible for populating the data.
