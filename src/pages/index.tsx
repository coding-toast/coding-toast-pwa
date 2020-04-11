import * as React from 'react'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import BlogHighlightSection from '../modules/blog-highlights/BlogHighlightSection'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <BlogHighlightSection />
    </Page>
  </IndexLayout>
)

export default IndexPage
