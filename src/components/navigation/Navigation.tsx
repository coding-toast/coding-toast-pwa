import * as React from 'react'
import Logo from './Logo'
import Menu from './menu/Menu'

const NavigationStyles = {
  backgroundColor: '#121212',
  position: 'relative'
}

const Navigation: React.FC = () => (
  <div style={NavigationStyles}>
    <Logo />
    <Menu />
  </div>
)

export default Navigation
