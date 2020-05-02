import * as React from 'react'
import Button from '../../buttons/Button'
import SignUpButtonStyles from './SignUpButton.module.scss'

const SignUpButton: React.FC = () => {
  return <Button toUrl="/" buttonText="Sign Me Up!" className={`${SignUpButtonStyles.submitButton} text-style-label`} />
}

export default SignUpButton
