import * as React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import SectionContainer, { BackgroundShade } from '../components/section-container/SectionContainer'
import BasicCard from '../components/card/BasicCard'

const ResourcesPage: React.FC = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allStrapiResources {
          edges {
            node {
              id
              title
              description
              banner
              url
            }
          }
        }
      }
    `
  )
  return (
    <IndexLayout>
      <Page>
        <SectionContainer backgroundShade={BackgroundShade.PRIMARY}>
          <h1 className="text-center">Resources</h1>
          <Row xs={1} lg={2}>
            {query.allStrapiResources?.edges.map((resource: any) => {
              const { title, banner, description, id } = resource.node
              return (
                <Col>
                  <BasicCard id={id} title={title} banner={banner} description={description} publishDate={''} />
                </Col>
              )
            })}
          </Row>
        </SectionContainer>
      </Page>
    </IndexLayout>
  )
}

export default ResourcesPage
