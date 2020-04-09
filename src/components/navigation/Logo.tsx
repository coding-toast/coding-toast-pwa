import * as React from 'react'
import LogoImage from '../../images/logo.png'

const Logo: React.FC = () => (
  <a href="/">
    <div style={{ textAlign: 'center', maxWidth: '100%', paddingLeft: '30px' }}>
      <img src={LogoImage} alt="Logo" style={{ maxWidth: '100%' }} />
    </div>
  </a>
)

export default Logo
