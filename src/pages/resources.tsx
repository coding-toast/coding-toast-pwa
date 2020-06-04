import * as React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import SectionContainer, { BackgroundShade } from '../components/section-container/SectionContainer'
import { Row, Col, Card, Button } from 'react-bootstrap'

const ResourcesPage = () => (
  <IndexLayout>
    <Page>
      <SectionContainer backgroundShade={BackgroundShade.PRIMARY}>
        <Row xs={1} lg={2}></Row>
      </SectionContainer>
    </Page>
  </IndexLayout>
)

export default ResourcesPage
