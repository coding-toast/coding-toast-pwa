import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { observer } from 'mobx-react-lite'
import { NextSectionStoreContext } from '../../stores/NextSectionStore'
import ExcerptList from './excerpt-list/ExcerptList'
import ButtonToBlogs from '../../components/buttons/button-to-blogs/ButtonToBlogs'
import SectionContainer, { BackgroundShade } from '../../components/SectionContainer'

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
    <SectionContainer backgroundShade={BackgroundShade.SECONDARY}>
      <h1 className="text-color-primary" ref={nextSectionStore.ref}>
        Catch Up On The Latest
      </h1>
      <ExcerptList allMarkdownRemark={query} />
      <ButtonToBlogs />
    </SectionContainer>
  )
})

export default BlogHighlightSection
