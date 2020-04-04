import * as React from 'react'

interface CardTitleProps {
  title: string
}

const CardTitle: React.FC<CardTitleProps> = props => {
  const { title } = props

  return <h2>{title}</h2>
}

export default CardTitle
