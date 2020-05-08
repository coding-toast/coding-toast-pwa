import * as React from 'react'
import Container, { BackgroundShade } from '../section-container/SectionContainer'
import QuoteBox from '../quote-box/QuoteBox'
import Logo from '../navigation/logo/Logo'
import NextSection from '../navigation/NextSection'

const Header: React.FC = () => (
  <Container backgroundShade={BackgroundShade.PRIMARY} style={{ minHeight: '68vh' }}>
    <Logo fillWidth />
    <QuoteBox />
    <NextSection />
  </Container>
)

export default Header
