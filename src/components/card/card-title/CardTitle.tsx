import * as React from 'react'

interface CardTitleProps {
  title: string
  backgroundUrl?: string
}

const CardTitle: React.FC<CardTitleProps> = props => {
  const { title, backgroundUrl } = props

  const backgroundStyle = {
    position: 'relative' as 'relative',
    height: '124px',
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover'
  }

  const textStyle = {
    position: 'absolute' as 'absolute',
    bottom: '12px',
    padding: 0,
    margin: 0
  }

  return (
    <div style={backgroundUrl ? backgroundStyle : {}}>
      <h2 style={backgroundUrl ? textStyle : {}}>{title}</h2>
    </div>
  )
}

export default CardTitle
