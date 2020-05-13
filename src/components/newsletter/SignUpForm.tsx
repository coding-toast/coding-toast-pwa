import * as React from 'react'
import SignUpButton from '../buttons/button-signup/SignUpButton'
import NewsletterStyles from './Newsletter.module.scss'

const SignUpForm: React.FC = () => {
  return (
    <form action="">
      <input type="email" name="email" className={NewsletterStyles.emailInput} />
      <SignUpButton />
    </form>
  )
}

export default SignUpForm
