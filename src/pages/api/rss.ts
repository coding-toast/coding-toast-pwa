// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fetch = require('node-fetch');

interface IBlog {
  author: string;
  banner: string;
  createdAt: string;
  description: string;
  title: string;
}

export default async (res) => {
  await fetch('https://aqueous-taiga-17941.herokuapp.com/blogs')
    .then((data) => {
      return data.json();
    })
    .then((posts) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/xml');

      let xml = `<?xml version="1.0" ?>
                  <rss version="2.0">
                    <channel>
                      <title>Coding Toast</title>
                      <link>https://www.codingtoast.com</link>
                      <description>Coding Toast Blog</description>`;

      posts?.map((post: IBlog) => {
        return (xml += `
            <item>
              <ttl>1</ttl>
              <title>${post.title}</title>
              <image>${post.banner}</image>
              <description>${post.description}</description>
              <author>${post.author}</author>
            </item>
          `);
      });

      xml += `</channel></rss>`;
      res.end(xml);
    });
};
