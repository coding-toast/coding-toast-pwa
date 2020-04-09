import * as React from 'react'

interface CardDescriptionProps {
  text: string
}

const CardDesctiption: React.FC<CardDescriptionProps> = props => {
  const { text } = props

  return (
    <div>
      <p className="text-color-secondary">{text}</p>
    </div>
  )
}

export default CardDesctiption
