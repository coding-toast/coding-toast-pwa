import * as React from 'react'
import Logo from './Logo'
import QuoteBox from '../quote-box/QuoteBox'
import NextSection from './NextSection'
import HamburgerButton from './menu/HamburgerButton'
import Container from '../Container'
import NavigationStyles from './Navigation.module.scss'

const Navigation: React.FC = () => (
  <Container className={NavigationStyles.container}>
    <Logo />
    <HamburgerButton />
    <QuoteBox />
    <NextSection />
  </Container>
)

export default Navigation
