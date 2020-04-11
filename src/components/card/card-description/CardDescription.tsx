import * as React from 'react'

interface CardDescriptionProps {
  text: string
}

const CardDescription: React.FC<CardDescriptionProps> = props => {
  const { text } = props

  return (
    <div>
      <p className="text-color-secondary">{text}</p>
    </div>
  )
}

export default CardDescription
