import * as React from 'react'
import HamburgerIcon from '../../../images/hamburger.png'
import Menu from './Menu'
import HamburgerStyles from './HamburgerButton.module.scss'

const HamburgerButton: React.FC = () => {
  const [open, setIsOpen] = React.useState(false)
  return (
    <div>
      <button type="button" className={HamburgerStyles.hamburgerButton} onClick={() => setIsOpen(!open)} onKeyDown={() => setIsOpen(!open)}>
        <img src={HamburgerIcon} className={HamburgerStyles.hamburgerIcon} alt="Open Menu" />
      </button>
      {open ? <Menu /> : ''}
    </div>
  )
}

export default HamburgerButton
