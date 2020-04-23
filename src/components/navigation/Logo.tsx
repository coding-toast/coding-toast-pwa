import * as React from 'react'
import LogoImage from '../../images/logo.svg'
import LogoStyles from './Logo.module.scss'

const Logo: React.FC = () => (
  <a href="/">
    <div className={LogoStyles.logoContainer}>
      <img className={LogoStyles.logoImage} src={LogoImage} alt="Logo" />
    </div>
  </a>
)

export default Logo
