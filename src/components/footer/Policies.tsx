import * as React from 'react'
import { Link } from 'gatsby'
import FooterStyles from './Footer.module.scss'

const Policies: React.FC = () => {
  return (
    <div className={FooterStyles.links}>
      <Link to="/" className={FooterStyles.leftAlign}>
        Privacy Policy
      </Link>
      <Link to="/" className={FooterStyles.rightAlign}>
        Terms of Service
      </Link>
    </div>
  )
}

export default Policies
