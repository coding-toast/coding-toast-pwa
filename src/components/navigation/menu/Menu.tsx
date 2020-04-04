import * as React from 'react'
import HamburgerIcon from '../../../images/hamburger.png'

const HamburgerIconStyles = {
  color: '#70F3FF',
  display: 'block',
  position: 'absolute',
  right: 0,
  top: 0,
  padding: '1em'
}

const MenuLinkStyles = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '24px',
  padding: '10px'
}

const Menu: React.FC = () => (
  <div>
    <div id="menuLinks" style={{ display: 'none' }}>
      <a href="#" style={MenuLinkStyles}>
        About
      </a>
      <a href="#" style={MenuLinkStyles}>
        Contact
      </a>
      <a href="#" style={MenuLinkStyles}>
        Login
      </a>
    </div>

    <a href="javascript:void(0)" style={HamburgerIconStyles} onClick={displayMenu}>
      <img src={HamburgerIcon} />
    </a>
  </div>
)

function displayMenu() {
  let element = document.getElementById('menuLinks')

  if (element.style.display === 'block') element.style.display = 'none'
  else element.style.display = 'block'
}

export default Menu
