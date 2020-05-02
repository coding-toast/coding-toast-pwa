import * as React from 'react'
import Container from '../../Container'
import NewsletterStyles from './Newsletter.module.scss'
import SocialMedia from '../SocialMedia'
import SignUpInfo from './SignUpInfo'
import SignUpForm from './SignUpForm'

const NewsLetter: React.FC = () => {
  return (
    <Container className={NewsletterStyles.container}>
      <SignUpInfo />
      <SignUpForm />
      <SocialMedia styles={NewsletterStyles} />
    </Container>
  )
}

export default NewsLetter
