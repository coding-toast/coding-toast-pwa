import * as React from 'react'
import Logo from './Logo'
import Menu from './menu/Menu'
import QuoteCard from '../QuoteCard'

const NavigationStyles = {
  backgroundColor: '#121212',
  position: 'relative' as 'relative'
}

const Navigation: React.FC = () => (
  <div style={NavigationStyles}>
    <Logo />
    <Menu />
    <QuoteCard />
  </div>
)

export default Navigation
