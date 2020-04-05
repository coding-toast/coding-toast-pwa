import * as React from 'react'

interface CardDescriptionProps {
  text: string
}

const CardDesctiption: React.FC<CardDescriptionProps> = props => {
  const { text } = props

  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default CardDesctiption
