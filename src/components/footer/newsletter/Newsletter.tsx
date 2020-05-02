import * as React from 'react'
import Container from '../../Container'
import NewsletterStyles from './Newsletter.module.scss'
import SocialMedia from '../SocialMedia'

const NewsLetter: React.FC = () => {
  return (
    <Container className={NewsletterStyles.container}>
      <h1>Newsletter</h1>
      <SocialMedia styles={NewsletterStyles} />
    </Container>
  )
}

export default NewsLetter
