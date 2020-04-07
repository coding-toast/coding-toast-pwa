import React from 'react'
import renderer from 'react-test-renderer'
import ExerptList from '../ExerptList'

it('renders correctly', () => {
  const query = {
    allMarkdownRemark: {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              frontmatter: {
                author: 'author here',
                banner:
                  'https://cliparting.com/wp-content/uploads/2016/06/Ribbon-outline-banner-clip-art-free-vector-for-free-download-about.jpg',
                description: 'second blog post',
                title: 'blog-post-placerholder2',
                publishDate: 'June 16, 2007'
              },
              html: '<p>Test</p>'
            }
          },
          {
            node: {
              frontmatter: {
                author: 'author here',
                banner:
                  'https://cliparting.com/wp-content/uploads/2016/06/Ribbon-outline-banner-clip-art-free-vector-for-free-download-about.jpg',
                description: 'third blog post',
                title: 'blog-post-placerholder3',
                publishDate: 'January 30, 2001'
              },
              html: '<p>Test</p>'
            }
          },
          {
            node: {
              frontmatter: {
                author: 'author here',
                banner:
                  'https://cliparting.com/wp-content/uploads/2016/06/Ribbon-outline-banner-clip-art-free-vector-for-free-download-about.jpg',
                description: 'fourth blog post',
                title: 'blog-post-placerholder4',
                publishDate: 'February 13, 1995'
              },
              html: '<p>Test</p>'
            }
          },
          {
            node: {
              frontmatter: {
                author: 'author here',
                banner:
                  'https://cliparting.com/wp-content/uploads/2016/06/Ribbon-outline-banner-clip-art-free-vector-for-free-download-about.jpg',
                description: 'fifth blog post',
                title: 'blog-post-placerholder5',
                publishDate: 'December 7, 2005'
              },
              html: '<p>Test</p>'
            }
          },
          {
            node: {
              frontmatter: {
                author: 'author here',
                banner:
                  'https://cliparting.com/wp-content/uploads/2016/06/Ribbon-outline-banner-clip-art-free-vector-for-free-download-about.jpg',
                description: 'first blog post',
                title: 'blog-post-placerholder1',
                publishDate: 'December 29, 2015'
              },
              html: '<p>Test</p>'
            }
          }
        ]
      }
    }
  }

  const tree = renderer.create(<ExerptList allMarkdownRemark={query} />).toJSON()
  expect(tree).toMatchSnapshot()
})
