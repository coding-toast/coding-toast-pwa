import * as React from 'react'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'gatsby'
import { SocialBrand } from '../types'

interface SocialBrandIconProps {
  brand: SocialBrand
  size: number
}

const SocialBrandIcon: React.FC<SocialBrandIconProps> = (props) => {
  const { brand, size } = props
  return (
    <Col className="mx-auto text-center" xs="auto">
      <Link to={brand.href}>
        <Image src={brand.logo} alt={brand.name} style={{ height: `${size}em` }} />
      </Link>
    </Col>
  )
}

export default SocialBrandIcon
