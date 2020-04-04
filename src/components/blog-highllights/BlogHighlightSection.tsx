import * as React from 'react'
import { ExerptCard } from './exerpt-card/ExerptCard'
import { ExerptList } from './exerpt-list/ExerptList'

const children = [<ExerptCard />, <ExerptCard />, <ExerptCard />, <ExerptCard />]
const BlogHighlightSection: React.FC<{}> = () => {
  return (
    <section>
      <h1>Catch Up On The Latest</h1>
      <ExerptList>{children}</ExerptList>
    </section>
  )
}

export default BlogHighlightSection
