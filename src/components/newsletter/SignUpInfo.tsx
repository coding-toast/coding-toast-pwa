import * as React from 'react'
import NewsletterStyles from './Newsletter.module.scss'

const SignUpInfo: React.FC = () => {
  return (
    <div>
      <h1>Sign up for our Newsletter</h1>
      <ul className={NewsletterStyles.list}>
        <li>Exclusive Offers</li>
        <li>Giveaways</li>
        <li>Updates always important to you!</li>
      </ul>
    </div>
  )
}

export default SignUpInfo
