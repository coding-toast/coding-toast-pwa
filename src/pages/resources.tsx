import * as React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import SectionContainer, { BackgroundShade } from '../components/section-container/SectionContainer'
import { Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import BasicCard from '../components/card/BasicCard'

const ResourcesPage = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                description
                banner
                author
                publishDate
              }
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
          <Row xs={1} lg={2}>
            {query.allMarkdownRemark?.edges.map((resource: any) => {
              const { title, banner, description, publishDate, id } = resource.node.frontmatter
              return (
                <Col>
                  <BasicCard id={id} title={title} banner={banner} description={description} publishDate={publishDate} />
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
