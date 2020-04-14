import * as React from 'react'
import HamburgerIcon from '../../../images/hamburger.png'
import Menu from './Menu'
import HamburgerStyles from './HamburgerButton.module.scss'

const HamburgerButton: React.FC = () => {
  const [open, isOpen] = React.useState(false)
  return (
    <div>
      <button type="button" className={HamburgerStyles.hamburgerButton} onClick={() => isOpen(!open)} onKeyDown={() => isOpen(!open)}>
        <img src={HamburgerIcon} className={HamburgerStyles.hamburgerIcon} alt="Open Menu" />
      </button>
      {open ? <Menu /> : ''}
    </div>
  )
}

export default HamburgerButton
