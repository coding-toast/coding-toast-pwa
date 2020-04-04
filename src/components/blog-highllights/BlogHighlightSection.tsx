import * as React from 'react'
import { ExerptList } from './exerpt-list/ExerptList'
import { CardBody, CardDesctiption } from '../card'

const BlogHighlightSection: React.FC<{}> = () => {
  return (
    <section>
      <h1>Catch Up On The Latest</h1>
      <ExerptList>
        <CardBody>
          <CardDesctiption text="abc" />
        </CardBody>
      </ExerptList>
    </section>
  )
}

export default BlogHighlightSection
