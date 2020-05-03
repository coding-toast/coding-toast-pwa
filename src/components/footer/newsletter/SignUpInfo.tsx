import * as React from 'react'
import NewsletterStyles from './Newsletter.module.scss'

const SignUpInfo: React.FC = () => {
  return (
    <div>
      <p className={NewsletterStyles.heading}>Sign up for our Newsletter</p>
      <p className={NewsletterStyles.listHeading}>Get Notified For</p>
      <ul className={NewsletterStyles.list}>
        <li>Exclusive Offers</li>
        <li>Giveaways</li>
        <li>Updates always important to you!</li>
      </ul>
    </div>
  )
}

export default SignUpInfo
