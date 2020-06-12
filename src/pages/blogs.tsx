import * as React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import SectionContainer, { BackgroundShade } from '../components/section-container/SectionContainer'
import { useStaticQuery, graphql } from 'gatsby'
import ExcerptList from '../modules/blog-highlights/excerpt-list/ExcerptList'

const BlogsPage = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allStrapiBlogs {
          edges {
            node {
              blogId
              author
              banner
              title
              description
              content
            }
          }
        }
      }
    `
  )
  return (
    <IndexLayout>
      <Page>
        <SectionContainer backgroundShade={BackgroundShade.PRIMARY}>
          <ExcerptList allStrapiBlogs={query} />
        </SectionContainer>
      </Page>
    </IndexLayout>
  )
}

export default BlogsPage
