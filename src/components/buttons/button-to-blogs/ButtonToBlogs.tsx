import * as React from 'react'
import ButtonToBlogsStyles from './ButtonToBlogs.module.scss'
import Button from '../Button'

const ButtonToBlogs: React.FC = () => {
  return <Button toUrl="/" buttonText="Go To All Posts" className={`${ButtonToBlogsStyles.primaryBtn} text-style-label`} />
}

export default ButtonToBlogs
