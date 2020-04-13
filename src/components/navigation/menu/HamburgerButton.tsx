import * as React from 'react'
import HamburgerIcon from '../../../images/hamburger.png'
import Menu from './Menu'

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

const HamburgerButton: React.FC = () => {
  const [open, isOpen] = React.useState(false)
  return (
    <div>
      <button type="button" className="hamburgerButton" style={ButtonStyle} onClick={() => isOpen(!open)} onKeyDown={() => isOpen(!open)}>
        <img src={HamburgerIcon} style={HamburgerIconStyles} alt="Open Menu" />
      </button>
      {open ? <Menu /> : ''}
    </div>
  )
}

export default HamburgerButton
