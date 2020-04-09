import * as React from 'react'
import BlogHighlightSectionStyles from './BlogHighlightSection.module.scss'
import { ExerptList } from './exerpt-list/ExerptList'
import Container from '../../components/Container'

const BlogHighlightSection: React.FC<{}> = () => {
  return (
    <Container className={BlogHighlightSectionStyles.container}>
      <h1 className="text-color-primary">Catch Up On The Latest</h1>
      <ExerptList />
    </Container>
  )
}

export default BlogHighlightSection
