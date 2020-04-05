import * as React from 'react'
import Logo from './Logo'
import QuoteCard from '../QuoteCard'
import NextSection from './NextSection'
import HamburgerButton from './menu/HamburgerButton'

const NavigationStyles = {
  backgroundColor: '#121212',
  position: 'relative' as 'relative'
}

const Navigation: React.FC = () => (
  <div style={NavigationStyles}>
    <Logo />
    <HamburgerButton />
    <QuoteCard />
    <NextSection />
  </div>
)

export default Navigation
