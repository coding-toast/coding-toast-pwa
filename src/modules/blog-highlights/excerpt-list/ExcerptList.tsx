import * as React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'gatsby'

/*
query IndexQuery {
  allStrapiBlogs {
    edges {
      node {
        author
        banner
        blogId
        title
        description
        content
      }
    }
  }
}
*/

interface ExcerptListProps {
  allStrapiBlogs: {
    allStrapiBlogs: {
      edges: Post[]
    }
  }
}
interface Post {
  node: {
    banner: string
    description: string
    title: string
    publishDate: string
  }
}
const ExcerptList: React.FC<ExcerptListProps> = (props) => {
  const { allStrapiBlogs } = props
  return (
    <Row as="section" xs={1} md={2}>
      {allStrapiBlogs.allStrapiBlogs?.edges.map((post: Post) => {
        const { title, banner, description, publishDate } = post.node
        return (
          <Col>
            <Card key={32} style={{ margin: '16px 0', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <Card.Img variant="top" src={banner} alt={`Banner ${title}`} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-style-muted text-color-secondary">{publishDate}</Card.Subtitle>
                <Card.Text className="text-color-primary">{description}</Card.Text>
                <Card.Link>
                  <Link to="/">Read More</Link>
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
