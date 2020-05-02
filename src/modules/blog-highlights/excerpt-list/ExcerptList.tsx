import * as React from 'react'
import { Row, Col } from 'react-bootstrap'
import { CardBody, CardTitle, CardDescription, CardMeta } from '../../../components/card'
import { ButtonWithIcon } from '../../../components/buttons/button-with-icon/ButtonWithIcon'

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
            <CardBody key={id}>
              <CardTitle title={title} backgroundUrl={banner} />
              <CardDescription text={description} />
              <CardMeta publishDate={publishDate} />
              <ButtonWithIcon toUrl="/" />
            </CardBody>
          </Col>
        )
      })}
    </Row>
  )
}
export default ExcerptList
