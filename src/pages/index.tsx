import * as React from 'react'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import BlogHighlightSection from '../modules/blog-highlights/BlogHighlightSection'
import NewsLetter from '../components/footer/newsletter/Newsletter'
import Header from '../components/header/Header'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Header />
      <BlogHighlightSection />
      <NewsLetter />
    </Page>
  </IndexLayout>
)

export default IndexPage
