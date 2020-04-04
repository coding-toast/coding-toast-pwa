import * as React from 'react'

interface CardImgProps {
  imgUrl: string
  altText: string
}

const CardImg: React.FC<CardImgProps> = props => {
  const { imgUrl, altText } = props

  return <img src={imgUrl} alt={altText} />
}

export default CardImg
