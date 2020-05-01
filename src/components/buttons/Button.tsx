import * as React from 'react'
import { Link } from 'gatsby'

interface ButtonProps {
  toUrl: string
  buttonText: string
  className: string
}

const Button: React.FC<ButtonProps> = (props) => {
  const { toUrl, buttonText, className } = props

  return (
    <Link to={toUrl} className={className}>
      {buttonText}
    </Link>
  )
}

export default Button
