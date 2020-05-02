import * as React from 'react'
import Logo from './logo/Logo'
import QuoteBox from '../quote-box/QuoteBox'
import NextSection from './NextSection'
import HamburgerButton from './menu/HamburgerButton'
import Container, { BackgroundShade } from '../section-container/SectionContainer'
// FIXME: import NavigationStyles from './Navigation.module.scss'
import LogoStyles from './logo/Logo.module.scss'

const Navigation: React.FC = () => (
  <Container backgroundShade={BackgroundShade.PRIMARY}>
    <Logo styles={LogoStyles} />
    <HamburgerButton />
    <QuoteBox />
    <NextSection />
  </Container>
)

export default Navigation
