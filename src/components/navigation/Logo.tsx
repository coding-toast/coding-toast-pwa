import * as React from 'react'
import LogoImage from '../../images/logo.png'

const Logo: React.FC = () => (
  <a href="/">
    <img src={LogoImage} alt="Logo" width="33%" />
  </a>
)

export default Logo
