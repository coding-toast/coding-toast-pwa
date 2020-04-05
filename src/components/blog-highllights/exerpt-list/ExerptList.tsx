import * as React from 'react'
import { CardBody, CardImg, CardTitle, CardDesctiption, CardMeta } from '../../card'

export const ExerptList: React.FC = () => {
  return (
    <CardBody>
      <CardImg
        imgUrl="https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f"
        altText="Im a picture"
      />
      <CardTitle title="Lorem Ipsum" />
      <CardDesctiption text="abc" />
      <CardMeta publishDate="November 11, 2016" />
    </CardBody>
  )
}
