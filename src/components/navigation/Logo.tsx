import * as React from 'react'
import LogoImage from '../../images/logo.svg'
import LogoStyles from './Logo.module.scss'
import { Link } from 'gatsby'

const Logo: React.FC = () => (
  <Link to="/" className={LogoStyles.logoContainer}>
    <img className={LogoStyles.logoImage} src={LogoImage} alt="Logo" />
  </Link>
)

export default Logo
