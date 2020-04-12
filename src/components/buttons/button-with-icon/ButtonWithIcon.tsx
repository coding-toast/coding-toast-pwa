import React from 'react'
import { Link } from 'gatsby'
import ButtonWithIconStyles from './ButtonWithIcon.module.scss'

export const ButtonWithIcon: React.FC = () => {
  return (
    <Link to="" className={`${ButtonWithIconStyles.button} text-style-label`}>
      Read More
    </Link>
  )
}
