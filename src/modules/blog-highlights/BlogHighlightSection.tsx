import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { observer } from 'mobx-react-lite'
import { Button } from 'react-bootstrap'
import { NextSectionStoreContext } from '../../stores/NextSectionStore'
import ExcerptList from './excerpt-list/ExcerptList'
import SectionContainer, { BackgroundShade } from '../../components/section-container/SectionContainer'

const BlogHighlightSection: React.FC = observer(() => {
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
  const nextSectionStore = React.useContext(NextSectionStoreContext)

  return (
    <SectionContainer backgroundShade={BackgroundShade.SECONDARY}>
      <h1 ref={nextSectionStore.ref}>Catch Up On The Latest</h1>
      <ExcerptList allStrapiBlogs={query} />
      <Link to="/">
        <Button className="btn-accent-secondary" block>
          Checkout All Blog Posts
        </Button>
      </Link>
    </SectionContainer>
  )
})

export default BlogHighlightSection
