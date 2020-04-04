import * as React from 'react'
import LogoImage from '../../images/logo.png'

const Logo: React.FC = () => (
  <div style={{ textAlign: 'center' }}>
    <a href="/">
      <img src={LogoImage} alt="Logo" style={{ maxWidth: '33%', minWidth: '300px' }} />
    </a>
  </div>
)

export default Logo
