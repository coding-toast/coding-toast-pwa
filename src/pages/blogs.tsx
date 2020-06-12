import * as React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import SectionContainer, { BackgroundShade } from '../components/section-container/SectionContainer'

const BlogsPage = () => (
  <IndexLayout>
    <Page>
      <SectionContainer backgroundShade={BackgroundShade.SECONDARY}>
        <h1>BLOGS PAGE</h1>
      </SectionContainer>
    </Page>
  </IndexLayout>
)

export default BlogsPage
