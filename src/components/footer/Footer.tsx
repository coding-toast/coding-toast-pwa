import * as React from 'react'
import Container from '../Container'
import FooterStyles from './Footer.module.scss'
import Copyright from './Copyright'
import Logo from '../navigation/logo/Logo'

const Footer: React.FC = () => (
  <Container className={FooterStyles.container}>
    <Logo styles={FooterStyles} />
    <Copyright />
  </Container>
)

export default Footer
