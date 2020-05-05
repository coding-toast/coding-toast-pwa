import * as React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { CardBody, CardTitle, CardDescription, CardMeta } from '../../../components/card'
import { ButtonWithIcon } from '../../../components/buttons/button-with-icon/ButtonWithIcon'
import { Link } from 'gatsby'

interface ExcerptListProps {
  allMarkdownRemark: {
    allMarkdownRemark: {
      edges: Post[]
    }
  }
}
interface Post {
  node: {
    id: string
    frontmatter: {
      banner: string
      description: string
      title: string
      publishDate: string
    }
  }
}
const ExcerptList: React.FC<ExcerptListProps> = (props) => {
  const { allMarkdownRemark } = props
  return (
    <Row as="section" xs={1} md={2}>
      {allMarkdownRemark.allMarkdownRemark.edges.map((post: Post) => {
        const { title, banner, description, publishDate } = post.node.frontmatter
        const { id } = post.node
        return (
          <Col>
            <Card key={id} style={{ margin: '16px 0', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <Card.Img variant="top" src={banner} />
              <Card.Body>
                <Card.Title className="text-color-primary">{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-style-muted text-color-secondary">{publishDate}</Card.Subtitle>
                <Card.Text className="text-color-primary">{description}</Card.Text>
                <Card.Link>
                  <Link to="">Read More</Link>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}
export default ExcerptList
