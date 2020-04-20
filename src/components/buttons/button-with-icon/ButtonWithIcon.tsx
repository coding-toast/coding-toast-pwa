import React from 'react'
import ButtonWithIconStyles from './ButtonWithIcon.module.scss'
import Button from '../Button'

interface ButtonWithIconProps {
  toUrl: string
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = props => {
  const { toUrl } = props
  return <Button toUrl={toUrl} buttonText="Read More" className={`${ButtonWithIconStyles.buttonWithIcon} text-style-label`} />
}
