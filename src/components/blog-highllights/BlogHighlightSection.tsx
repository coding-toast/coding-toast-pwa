import * as React from 'react'
import { ExerptList } from './exerpt-list/ExerptList'

const BlogHighlightSection: React.FC<{}> = () => {
  return (
    <section>
      <h1>Catch Up On The Latest</h1>
      <ExerptList></ExerptList>
    </section>
  )
}

export default BlogHighlightSection
