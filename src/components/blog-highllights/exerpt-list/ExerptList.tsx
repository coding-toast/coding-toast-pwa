import * as React from 'react'
import { CardBody, CardTitle, CardDesctiption, CardMeta } from '../../card'

const ExerptList: React.FC<any> = props => {
  const { allMarkdownRemark } = props
  console.log(allMarkdownRemark)
  return (
    <section>
      {allMarkdownRemark.allMarkdownRemark.edges.map((post: any) => (
        <CardBody>
          <CardTitle title={post.node.frontmatter.title} backgroundUrl={post.node.frontmatter.banner} />
          <CardDesctiption text={post.node.frontmatter.description} />
          <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
          <CardMeta publishDate={post.node.frontmatter.publishDate} />
        </CardBody>
      ))}
    </section>
  )
}

export default ExerptList
