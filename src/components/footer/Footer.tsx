import * as React from 'react'
import Container from '../Container'
import FooterStyles from './Footer.module.scss'
import Copyright from './Copyright'
import Logo from '../navigation/logo/Logo'
import Policies from './Policies'
import SocialMedia from './SocialMedia'

const Footer: React.FC = () => (
  <Container className={FooterStyles.container}>
    <Logo styles={FooterStyles} />
    <SocialMedia styles={FooterStyles} />
    <Policies />
    <Copyright />
  </Container>
)

export default Footer
