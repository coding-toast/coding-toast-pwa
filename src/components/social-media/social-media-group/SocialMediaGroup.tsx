import * as React from 'react'
import { scale, SocialBrand } from '../types'
import SocialBrandIcon from '../social-brand-icon/SocialBrandIcon'
import socialIcons from './SocialIcons'
import { Container, Row } from 'react-bootstrap'

interface SocialMediaGroupProps {
  scale?: scale
}

const scaleToEm = (scale: scale) => {
  switch (scale) {
    case 'small':
      return 2
    case 'medium':
      return 4
    case 'large':
      return 6
    default:
      return 4
  }
}

const SocialMediaGroup: React.FC<SocialMediaGroupProps> = (props) => {
  const brandLogoEm = scaleToEm(props.scale == null ? scale.MEDIUM : props.scale)
  const brands = socialIcons.map((element: SocialBrand, key: string | number | undefined) => {
    return <SocialBrandIcon key={key} brand={element} size={brandLogoEm} />
  })

  return (
    <Container style={{ maxWidth: `${socialIcons.length * 2 + socialIcons.length * brandLogoEm}em` }} fluid>
      <Row className="justify-content-md-center">{brands}</Row>
    </Container>
  )
}

export default SocialMediaGroup
