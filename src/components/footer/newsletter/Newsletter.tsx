import * as React from 'react'
import NewsletterStyles from './Newsletter.module.scss'
import SocialMedia from '../SocialMedia'
import Container, { BackgroundShade } from '../../section-container/SectionContainer'
import SignUpInfo from './SignUpInfo'
import SignUpForm from './SignUpForm'

const NewsLetter: React.FC = () => {
  return (
    <Container backgroundShade={BackgroundShade.PRIMARY}>
      <SignUpInfo />
      <SignUpForm />
      <SocialMedia styles={NewsletterStyles} />
    </Container>
  )
}

export default NewsLetter
