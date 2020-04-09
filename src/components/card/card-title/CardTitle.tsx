import * as React from 'react'
import CardTitleStyles from './CardTitle.module.scss'

interface CardTitleProps {
  title: string
  backgroundUrl?: string
}

const CardTitle: React.FC<CardTitleProps> = props => {
  const { title, backgroundUrl } = props

  const backgroundImage = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    marginBottom: '1em'
  }

  const cardTitleHeightWithBackground = {
    height: '125px'
  }

  return (
    <div className={CardTitleStyles.cardTitleContainer}>
      {backgroundUrl ? <div style={backgroundImage} className={CardTitleStyles.cardTitleBackground}></div> : ''}
      <h2 style={backgroundUrl ? cardTitleHeightWithBackground : {}} className={CardTitleStyles.cardTitle}>
        {title}
      </h2>
    </div>
  )
}

export default CardTitle
