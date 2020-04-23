import * as React from 'react'
import LogoImage from '../../images/logo.svg'
import LogoStyles from './Logo.module.scss'
import { Link } from 'gatsby'

const Logo: React.FC = () => (
  <div className={LogoStyles.logoContainer}>
    <img className={LogoStyles.logoImage} src={LogoImage} alt="coding toast" />
  </div>
)

export default Logo
