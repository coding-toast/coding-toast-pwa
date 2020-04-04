import * as React from 'react'
import HamburgerIcon from '../../../images/hamburger.png'

const HamburgerIconStyles = {
  color: '#70F3FF',
  display: 'block',
  position: 'absolute' as 'absolute',
  right: 0,
  top: 0,
  padding: '0'
}

const ButtonStyle = {
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit'
}

function displayMenu() {
  const element = document.getElementById('menuLinks')

  if (element !== null) {
    if (element.style.display === 'block') element.style.display = 'none'
    else element.style.display = 'block'
  }
}

const HamburgerButton: React.FC = () => (
  <button type="button" style={ButtonStyle} onClick={displayMenu} onKeyDown={displayMenu}>
    <img src={HamburgerIcon} style={HamburgerIconStyles} alt="Open Menu" />
  </button>
)

export default HamburgerButton
