import React from 'react'
import renderer from 'react-test-renderer'
import ExerptList from '../ExerptList'

it('renders correctly', () => {
  const query = {
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
            html:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam lectus sit amet sapien tincidunt placerat. Maecenas libero leo, commodo nec faucibus eu, mattis ac nisl. Sed libero nisl, suscipit nec dapibus id, porttitor vel elit. Nulla facilisi. In finibus nisl non purus accumsan efficitur. Nullam semper dapibus nisi, et sagittis nisi auctor at. Suspendisse commodo sed arcu ac imperdiet. Pellentesque ac lorem quis dolor vehicula viverra.</p>'
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
            html:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam lectus sit amet sapien tincidunt placerat. Maecenas libero leo, commodo nec faucibus eu, mattis ac nisl. Sed libero nisl, suscipit nec dapibus id, porttitor vel elit. Nulla facilisi. In finibus nisl non purus accumsan efficitur. Nullam semper dapibus nisi, et sagittis nisi auctor at. Suspendisse commodo sed arcu ac imperdiet. Pellentesque ac lorem quis dolor vehicula viverra.</p>'
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
            html:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam lectus sit amet sapien tincidunt placerat. Maecenas libero leo, commodo nec faucibus eu, mattis ac nisl. Sed libero nisl, suscipit nec dapibus id, porttitor vel elit. Nulla facilisi. In finibus nisl non purus accumsan efficitur. Nullam semper dapibus nisi, et sagittis nisi auctor at. Suspendisse commodo sed arcu ac imperdiet. Pellentesque ac lorem quis dolor vehicula viverra.</p>'
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
            html:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam lectus sit amet sapien tincidunt placerat. Maecenas libero leo, commodo nec faucibus eu, mattis ac nisl. Sed libero nisl, suscipit nec dapibus id, porttitor vel elit. Nulla facilisi. In finibus nisl non purus accumsan efficitur. Nullam semper dapibus nisi, et sagittis nisi auctor at. Suspendisse commodo sed arcu ac imperdiet. Pellentesque ac lorem quis dolor vehicula viverra.</p>'
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
            html:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam lectus sit amet sapien tincidunt placerat. Maecenas libero leo, commodo nec faucibus eu, mattis ac nisl. Sed libero nisl, suscipit nec dapibus id, porttitor vel elit. Nulla facilisi. In finibus nisl non purus accumsan efficitur. Nullam semper dapibus nisi, et sagittis nisi auctor at. Suspendisse commodo sed arcu ac imperdiet. Pellentesque ac lorem quis dolor vehicula viverra.</p>'
          }
        }
      ]
    }
  }

  const tree = renderer.create(<ExerptList allMarkdownRemark={query} />).toJSON()
  expect(tree).toMatchSnapshot()
})
