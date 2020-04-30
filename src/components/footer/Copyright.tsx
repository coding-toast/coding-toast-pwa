import * as React from 'react'
import FooterStyles from './Footer.module.scss'

const Copyright: React.FC = () => (
  <div>
    <p className={FooterStyles.copyright}>
      &copy; {new Date().getFullYear()} Coding Toast
      <br />
      Quentin Guenther, Nathan Corbin
    </p>
  </div>
)

export default Copyright
