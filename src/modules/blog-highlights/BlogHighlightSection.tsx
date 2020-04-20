import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BlogHighlightSectionStyles from './BlogHighlightSection.module.scss'
import Container from '../../components/Container'
import ExcerptList from './excerpt-list/ExcerptList'
import ButtonToBlogs from '../../components/buttons/button-to-blogs/ButtonToBlogs'

const BlogHighlightSection: React.FC = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 10, sort: { fields: frontmatter___publishDate, order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                banner
                description
                title
                publishDate
              }
            }
          }
        }
      }
    `
  )

  return (
    <Container className={BlogHighlightSectionStyles.container}>
      <h1 className="text-color-primary">Catch Up On The Latest</h1>
      <ExcerptList allMarkdownRemark={query} />
      <ButtonToBlogs />
    </Container>
  )
}

export default BlogHighlightSection
