import * as React from 'react'
import Container from '../Container'
import FooterStyles from './Footer.module.scss'
import Copyright from './Copyright'
import Logo from '../navigation/logo/Logo'
import Policies from './Policies'

const Footer: React.FC = () => (
  <Container className={FooterStyles.container}>
    <Logo styles={FooterStyles} />
    <Policies />
    <Copyright />
  </Container>
)

export default Footer
