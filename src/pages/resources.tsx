import * as React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import SectionContainer, { BackgroundShade } from '../components/section-container/SectionContainer'

const ResourcesPage = () => (
  <IndexLayout>
    <Page>
      <SectionContainer backgroundShade={BackgroundShade.PRIMARY}>
        <p>Hello Wold</p>
      </SectionContainer>
    </Page>
  </IndexLayout>
)

export default ResourcesPage
