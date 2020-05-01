import * as React from 'react'
import Container from '../../Container'
import NewsletterStyles from './Newsletter.module.scss'

const NewsLetter: React.FC = () => {
  return (
    <Container className={NewsletterStyles.container}>
      <h1>Newsletter</h1>
    </Container>
  )
}

export default NewsLetter
