import * as React from 'react'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import BlogHighlightSection from '../modules/blog-highlights/BlogHighlightSection'
import Footer from '../components/footer/Footer'
import NewsLetter from '../components/footer/newsletter/Newsletter'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <BlogHighlightSection />
      <NewsLetter />
      <Footer />
    </Page>
  </IndexLayout>
)

export default IndexPage
