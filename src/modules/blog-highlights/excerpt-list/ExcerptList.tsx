import * as React from 'react'
import { Row, Col } from 'react-bootstrap'
import BasicCard from '../../../components/card/BasicCard'

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
    blogId: string
  }
}
const ExcerptList: React.FC<ExcerptListProps> = (props) => {
  const { allStrapiBlogs } = props
  return (
    <Row as="section" xs={1} md={2}>
      {allStrapiBlogs.allStrapiBlogs?.edges.map((post: Post) => {
        const { title, banner, description, publishDate, blogId } = post.node
        return (
          <Col>
            <BasicCard id={blogId} title={title} banner={banner} description={description} publishDate={publishDate} />
          </Col>
        )
      })}
    </Row>
  )
}
export default ExcerptList
