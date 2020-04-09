import * as React from 'react'
import BlogHighlightSectionStyles from './BlogHighlightSection.module.css'
import { ExerptList } from './exerpt-list/ExerptList'
import Container from '../Container'

const BlogHighlightSection: React.FC<{}> = () => {
  return (
    <Container className={BlogHighlightSectionStyles.container}>
      <h1>Catch Up On The Latest</h1>
      <ExerptList />
    </Container>
  )
}

export default BlogHighlightSection
