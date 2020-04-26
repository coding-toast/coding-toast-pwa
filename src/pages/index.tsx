import * as React from 'react'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import BlogHighlightSection from '../modules/blog-highlights/BlogHighlightSection'
import Footer from '../components/footer/Footer'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <BlogHighlightSection />
      <Footer />
    </Page>
  </IndexLayout>
)

export default IndexPage
