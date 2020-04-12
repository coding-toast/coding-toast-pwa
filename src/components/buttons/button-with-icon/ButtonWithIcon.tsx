import React from 'react'
import { Link } from 'gatsby'
import ButtonWithIconStyles from './ButtonWithIcon.module.scss'

interface ButtonWithIconProps {
  toUrl: string
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = props => {
  const { toUrl } = props
  return (
    <Link to={toUrl} className={`${ButtonWithIconStyles.button} text-style-label`}>
      Read More
    </Link>
  )
}
