import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import { SocialBrandIcon, SocialIconScale } from 'components';
import socialIcons from './SocialIcons';
import { ISocialBrand } from '../types';
import { scaleToEm } from '../IconScaleToEm';

interface ISocialMediaGroupProps {
  converter?: (scale: SocialIconScale) => number;
  iconScale?: SocialIconScale;
}

const SocialMediaGroup: React.FC<ISocialMediaGroupProps> = (props) => {
  const { iconScale, converter } = props;

  const getSizeOrDefault = () => {
    const conv = converter ? converter : scaleToEm;

    const size = conv(iconScale == null ? SocialIconScale.MEDIUM : iconScale);

    return size ? size : 2;
  };

  const brandLogoEm = getSizeOrDefault();

  const brands = socialIcons.map((element: ISocialBrand) => {
    return <SocialBrandIcon key={element.name} brand={element} size={brandLogoEm} />;
  });

  return (
    <Container style={{ maxWidth: `${socialIcons.length * 2 + socialIcons.length * brandLogoEm}em` }} fluid>
      <Row className='justify-content-md-center'>{brands}</Row>
    </Container>
  );
};

export default SocialMediaGroup;
