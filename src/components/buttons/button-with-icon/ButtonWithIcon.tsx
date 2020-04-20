import React from 'react'
import ButtonWithIconStyles from './ButtonWithIcon.module.scss'
import Button from '../Button'

export const ButtonWithIcon: React.FC = () => {
  return <Button toUrl="/" buttonText="Read More" className={`${ButtonWithIconStyles.buttonWithIcon} text-style-label`} />
}
