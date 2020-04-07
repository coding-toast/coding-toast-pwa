import * as React from 'react'
import { CardBody, CardTitle, CardDesctiption, CardMeta } from '../../card'

interface ExcerptListProps {
  allMarkdownRemark: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            author: string
            banner: string
            description: string
            title: string
            publishDate: string
          }
        }
      }[]
    }
  }
}

const ExerptList: React.FC<ExcerptListProps> = props => {
  const { allMarkdownRemark } = props

  return (
    <section>
      {allMarkdownRemark.allMarkdownRemark.edges.map((post: any) => (
        <CardBody>
          <CardTitle title={post.node.frontmatter.title} backgroundUrl={post.node.frontmatter.banner} />
          <CardDesctiption text={post.node.frontmatter.description} />
          <CardMeta publishDate={post.node.frontmatter.publishDate} />
        </CardBody>
      ))}
    </section>
  )
}

export default ExerptList
