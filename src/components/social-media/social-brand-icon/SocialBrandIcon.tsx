import * as React from 'react';
import { Col, Image } from 'react-bootstrap';
import Link from 'next/link';
import { ISocialBrand } from '../types';

interface ISocialBrandIconProps {
  brand: ISocialBrand;
  size: number;
}

const SocialBrandIcon: React.FC<ISocialBrandIconProps> = (props) => {
  const { brand, size } = props;
  return (
    <Col className='mx-auto text-center' xs='auto'>
      <Link href={brand.href}>
        <Image src={brand.logo} alt={brand.name} style={{ height: `${size}em` }} />
      </Link>
    </Col>
  );
};

export default SocialBrandIcon;
