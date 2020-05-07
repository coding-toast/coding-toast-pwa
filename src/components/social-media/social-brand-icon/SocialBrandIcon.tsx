import * as React from 'react'
import { SocialBrand } from '../types'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'gatsby'

interface SocialBrandIconProps {
  brand: SocialBrand
  size: number
}

const SocialBrandIcon: React.FC<SocialBrandIconProps> = (props) => (
  <Col className="mx-auto text-center" xs="auto">
    <Link to={props.brand.href}>
      <Image src={props.brand.logo} alt={props.brand.name} style={{ height: `${props.size}em` }} />
    </Link>
  </Col>
)

export default SocialBrandIcon
