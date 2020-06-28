import * as React from 'react';
import { Image } from 'react-bootstrap';

interface ILogoProps {
  fillWidth?: boolean;
}

const Logo: React.FC<ILogoProps> = (props) => {
  const { fillWidth } = props;
  const logoWidth = fillWidth ? '100%' : '12em';
  return <Image className='logoImage' style={{ width: logoWidth }} src='/logo.svg' alt='coding toast' />;
};

export default Logo;
