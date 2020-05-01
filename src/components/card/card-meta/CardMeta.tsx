import * as React from 'react'
import CardMetaStyles from './CardMeta.module.scss'

interface CardMetaProps {
  publishDate: string
}

const CardMeta: React.FC<CardMetaProps> = (props) => {
  const { publishDate } = props

  return <p className={`${CardMetaStyles.meta} text-style-muted text-color-secondary`}>{publishDate}</p>
}

export default CardMeta
