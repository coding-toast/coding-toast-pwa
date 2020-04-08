import * as React from 'react'

const MenuLinkStyles = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '24px',
  padding: '10px'
}

const Menu: React.FC = () => (
  <div id="menuLinks">
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
)

export default Menu
