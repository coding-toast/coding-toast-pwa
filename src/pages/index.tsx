import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import BlogHighlightSection from '../components/blog-highllights/BlogHighlightSection'

const IndexPage = () => (
  <IndexLayout>
    <Page> 
      <Container>
        <BlogHighlightSection />
      </Container> 
    </Page>
  </IndexLayout>
)

export default IndexPage
