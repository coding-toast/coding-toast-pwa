import * as React from 'react'
import BlogHighlightSectionStyles from './BlogHighlightSection.module.css'
import { ExerptList } from './exerpt-list/ExerptList'

const BlogHighlightSection: React.FC<{}> = () => {
  return (
    <section className={BlogHighlightSectionStyles.container}>
      <h1>Catch Up On The Latest</h1>
      <ExerptList />
    </section>
  )
}

export default BlogHighlightSection
