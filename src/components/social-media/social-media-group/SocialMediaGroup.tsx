import * as React from 'react'
import { Container, Row } from 'react-bootstrap'
import SocialBrandIcon from '../social-brand-icon/SocialBrandIcon'
import socialIcons from './SocialIcons'
import { scale, SocialBrand } from '../types'

interface SocialMediaGroupProps {
  iconScale?: scale
}

const scaleToEm = (iconScale: scale) => {
  switch (iconScale) {
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
  const { iconScale } = props
  const brandLogoEm = scaleToEm(iconScale == null ? scale.MEDIUM : iconScale)

  const brands = socialIcons.map((element: SocialBrand) => {
    return <SocialBrandIcon key={element.name} brand={element} size={brandLogoEm} />
  })

  return (
    <Container style={{ maxWidth: `${socialIcons.length * 2 + socialIcons.length * brandLogoEm}em` }} fluid>
      <Row className="justify-content-md-center">{brands}</Row>
    </Container>
  )
}

export default SocialMediaGroup
