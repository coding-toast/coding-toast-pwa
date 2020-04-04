import * as React from 'react'
import HamburgerButton from './HamburgerButton'

const MenuLinkStyles = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '24px',
  padding: '10px'
}

const Menu: React.FC = () => (
  <div>
    <div id="menuLinks" style={{ display: 'none' }}>
      <a href="/" style={MenuLinkStyles}>
        About
      </a>
      <a href="/" style={MenuLinkStyles}>
        Contact
      </a>
      <a href="/" style={MenuLinkStyles}>
        Login
      </a>
    </div>

    <HamburgerButton />
  </div>
)

export default Menu
