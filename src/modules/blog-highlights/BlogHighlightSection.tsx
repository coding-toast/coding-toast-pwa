import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { observer } from 'mobx-react-lite'
import { NextSectionStoreContext } from '../../stores/NextSectionStore'
import BlogHighlightSectionStyles from './BlogHighlightSection.module.scss'
import Container from '../../components/Container'
import ExcerptList from './excerpt-list/ExcerptList'
import ButtonToBlogs from '../../components/buttons/button-to-blogs/ButtonToBlogs'

const BlogHighlightSection: React.FC = observer(() => {
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
  const nextSectionStore = React.useContext(NextSectionStoreContext)

  return (
    <Container className={BlogHighlightSectionStyles.container}>
      <h1 className="text-color-primary" ref={nextSectionStore.ref}>
        Catch Up On The Latest
      </h1>
      <ExcerptList allMarkdownRemark={query} />
      <ButtonToBlogs />
    </Container>
  )
})

export default BlogHighlightSection
