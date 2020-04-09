import * as React from 'react'

interface CardMetaProps {
  publishDate: string
}

const CardMeta: React.FC<CardMetaProps> = props => {
  const { publishDate } = props

  return <p className="text-style-muted text-color-secondary">{publishDate}</p>
}

export default CardMeta
