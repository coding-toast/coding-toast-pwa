import * as React from 'react'
import { CardBody, CardTitle, CardDescription, CardMeta } from '../../../components/card'
import ExcerptListStyles from './ExcerptList.module.scss'

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
const ExcerptList: React.FC<ExcerptListProps> = props => {
  const { allMarkdownRemark } = props
  return (
    <section className={ExcerptListStyles.list}>
      {allMarkdownRemark.allMarkdownRemark.edges.map((post: Post) => {
        // TODO: Add unique keys to blog posts (Issue #34 https://github.com/QuentinGuenther/coding-toast-pwa/issues/34)
        const { title, banner, description, publishDate } = post.node.frontmatter
        return (
          <CardBody key={title}>
            <CardTitle title={title} backgroundUrl={banner} />
            <CardDescription text={description} />
            <CardMeta publishDate={publishDate} />
            <ButtonWithIcon />
          </CardBody>
        )
      })}
    </section>
  )
}
export default ExcerptList
