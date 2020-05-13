import * as React from 'react'
import SignUpButton from '../buttons/button-signup/SignUpButton'

const SignUpForm: React.FC = () => {
  return (
    <form action="">
      <input type="email" name="email" />
      <SignUpButton />
    </form>
  )
}

export default SignUpForm
