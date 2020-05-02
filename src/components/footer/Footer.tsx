import * as React from 'react'
import Container, { BackgroundShade } from '../SectionContainer'
import FooterStyles from './Footer.module.scss'
import Copyright from './Copyright'
import Logo from '../navigation/logo/Logo'
import Policies from './Policies'
import SocialMedia from './SocialMedia'

const Footer: React.FC = () => (
  <Container backgroundShade={BackgroundShade.SECONDARY}>
    <Logo styles={FooterStyles} />
    <p className={FooterStyles.lead}>Follow Us</p>
    <SocialMedia styles={FooterStyles} />
    <Policies />
    <Copyright />
  </Container>
)

export default Footer
