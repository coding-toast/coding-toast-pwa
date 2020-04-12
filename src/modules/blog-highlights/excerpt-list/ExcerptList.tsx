import * as React from 'react'
import { CardBody, CardTitle, CardDescription, CardMeta } from '../../../components/card'
import ExcerptListStyles from './ExcerptList.module.scss'
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
const ExcerptList: React.FC<ExcerptListProps> = props => {
  const { allMarkdownRemark } = props
  return (
    <section className={ExcerptListStyles.list}>
      {allMarkdownRemark.allMarkdownRemark.edges.map((post: Post) => {
        const { title, banner, description, publishDate } = post.node.frontmatter
        const { id } = post.node
        return (
          <CardBody key={id}>
            <CardTitle title={title} backgroundUrl={banner} />
            <CardDescription text={description} />
            <CardMeta publishDate={publishDate} />
            <ButtonWithIcon toUrl="/" />
          </CardBody>
        )
      })}
    </section>
  )
}
export default ExcerptList
