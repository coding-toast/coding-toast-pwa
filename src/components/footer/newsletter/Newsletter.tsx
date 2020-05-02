import * as React from 'react'
import NewsletterStyles from './Newsletter.module.scss'
import SocialMedia from '../SocialMedia'
import Container, { BackgroundShade } from '../../section-container/SectionContainer'

const NewsLetter: React.FC = () => {
  return (
    <Container backgroundShade={BackgroundShade.PRIMARY}>
      <h1>Newsletter</h1>
      <SocialMedia styles={NewsletterStyles} />
    </Container>
  )
}

export default NewsLetter
