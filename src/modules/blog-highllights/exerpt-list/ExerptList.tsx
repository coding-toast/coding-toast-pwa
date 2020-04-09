import * as React from 'react'
import { CardBody, CardTitle, CardDesctiption, CardMeta } from '../../../components/card'
import ExerptListStyles from './ExerptList.module.scss'

export const ExerptList: React.FC = () => {
  return (
    <section className={ExerptListStyles.list}>
      <CardBody>
        <CardTitle title="Lorem Ipsum" />
        <CardDesctiption
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                            vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare quam viverra"
        />
        <CardMeta publishDate="November 11, 2016" />
      </CardBody>
      <CardBody>
        <CardTitle
          title="Lorem Ipsum"
          backgroundUrl="https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f"
        />
        <CardDesctiption
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                            vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare quam viverra"
        />
        <CardMeta publishDate="November 11, 2016" />
      </CardBody>
      <CardBody>
        <CardTitle
          title="Lorem Ipsum"
          backgroundUrl="https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f"
        />
        <CardDesctiption
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                            vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare quam viverra"
        />
        <CardMeta publishDate="November 11, 2016" />
      </CardBody>
      <CardBody>
        <CardTitle
          title="Lorem Ipsum"
          backgroundUrl="https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f"
        />
        <CardDesctiption
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                            vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare quam viverra"
        />
        <CardMeta publishDate="November 11, 2016" />
      </CardBody>
    </section>
  )
}
