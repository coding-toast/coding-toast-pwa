import * as React from 'react'
import BlogHighlightSectionStyles from './BlogHighlightSection.module.scss'
import Container from '../../components/Container'
import { useStaticQuery, graphql } from 'gatsby'
import ExerptList from './exerpt-list/ExerptList'

const BlogHighlightSection: React.FC = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 10, sort: { fields: frontmatter___publishDate, order: DESC }) {
          edges {
            node {
              frontmatter {
                author
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
    <section className={BlogHighlightSectionStyles.container}>
      <h1>Catch Up On The Latest</h1>
      <ExerptList allMarkdownRemark={query} />
    </section>
  )
}

export default BlogHighlightSection
