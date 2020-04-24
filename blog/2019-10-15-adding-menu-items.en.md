---
topics:
  - Chicago
  - zoos
title: Adding menu items
description: Add menu items in GraphQL to create a dynamic menu
date: 2019-10-15T15:41:34.000Z
image: /assets/img/07.jpg
author: Morgan Segura
category: Gatsby
background: "#7d4cdb"
---
The menu items translations are located in `config/menu` and the `useMenu` custom hook pulls these translations (via GraphQL query) and inserts them into the pages.

<a href="http://www.google.com">Link to Google</a> <br/> <a href="/about">Internal link</a>

```css
<style>
  .classesLink {
    color: red;
  }
</style>
```

```javascript


function NewFunction {
  return 1 + 2 * 3
}
// Testing comments
const MyComponent = () => {
  let nothin = 'sumthin';
  
}
{
  "menuItems": [
    { "name": "Home", "link": "/" },
    { "name": "About", "link": "/about-me" },
    { "name": "Blog", "link": "/blog" },
    { "name": "Contact", "link": "/contact" }
  ]
}
```