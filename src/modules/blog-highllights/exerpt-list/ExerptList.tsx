import * as React from 'react'
import { CardBody, CardTitle, CardDesctiption, CardMeta } from '../../../components/card'
import ExerptListStyles from './ExerptList.module.scss'

interface ExcerptListProps {
  allMarkdownRemark: {
    allMarkdownRemark: {
      edges: Post[]
    }
  }
}
interface Post {
  node: {
    frontmatter: {
      author: string
      banner: string
      description: string
      title: string
      publishDate: string
    }
  }
}
const ExerptList: React.FC<ExcerptListProps> = props => {
  const { allMarkdownRemark } = props
  return (
    <section className={ExerptListStyles.list}>
      {allMarkdownRemark.allMarkdownRemark.edges.map((post: Post) => {
        const { title, banner, description, publishDate } = post.node.frontmatter
        return (
          <CardBody>
            <CardTitle title={title} backgroundUrl={banner} />
            <CardDesctiption text={description} />
            <CardMeta publishDate={publishDate} />
          </CardBody>
        )
      })}
    </section>
  )
}
export default ExerptList
