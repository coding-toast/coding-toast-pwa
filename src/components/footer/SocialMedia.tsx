import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col, Image } from 'react-bootstrap'
import RedditIcon from '../../images/Reddit.svg'
import TwitterIcon from '../../images/Twitter.svg'
import RSSIcon from '../../images/RSS.svg'

export enum scale {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

interface StyleProps {
  scale?: scale
}

interface SocialBrandProps {
  brand: SocialBrand
  style?: React.CSSProperties
}

interface SocialBrand {
  name: string
  logo: any
  href: string
}

const socialLinks: Array<SocialBrand> = [
  {
    name: 'Twitter',
    logo: TwitterIcon,
    href: '/'
  },
  {
    name: 'Reddit',
    logo: RedditIcon,
    href: '/'
  },
  {
    name: 'RSS',
    logo: RSSIcon,
    href: '/'
  }
]

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

const SocialBrand: React.FC<SocialBrandProps> = (props) => (
  <Col className="mx-auto text-center" xs="auto">
    <Link to={props.brand.href}>
      <Image src={props.brand.logo} alt={props.brand.name} style={props.style} />
    </Link>
  </Col>
)

const SocialMedia: React.FC<StyleProps> = (props) => {
  const brandLogoEm = scaleToEm(props.scale == null ? scale.MEDIUM : props.scale)
  const brands = socialLinks.map((element, key) => {
    return <SocialBrand key={key} brand={element} style={{ height: `${brandLogoEm}em` }} />
  })

  return (
    <Container style={{ maxWidth: `${socialLinks.length * 2 + socialLinks.length * brandLogoEm}em` }} fluid>
      <Row className="justify-content-md-center">{brands}</Row>
    </Container>
  )
}

SocialMedia.defaultProps = { scale: scale.MEDIUM }

export default SocialMedia
