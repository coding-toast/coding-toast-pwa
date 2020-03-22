---
layout: page
title: 'Example Markdown page'
---

Now we're writing in Markdown! Pretty nice, huh?

This starter has out-of-the-box support for basic Markdown rendering. The `content/` directory is where you put all of your Markdown content in. Gatsby will build your pages out of it. Gatsby will also follow the directory structure of your files too, so when you store a page at e.g. `content/projects/large-hadron-collider.md`, it will be built in `/projects/large-hadron-collider/`.

```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-prismjs`]
    }
  }
]
```

```bash{promptUser: alice}
cd my-proj
mkdir wtfis this
cat txt.txt
```

[That's cool! Okay, take me back home.](/)
