import * as React from 'react'
import Container, { BackgroundShade } from '../../section-container/SectionContainer'
import SignUpInfo from './SignUpInfo'
import SignUpForm from './SignUpForm'
import { SocialMediaGroup, scale } from '../../social-media'

const NewsLetter: React.FC = () => {
  return (
    <Container backgroundShade={BackgroundShade.PRIMARY}>
      <SignUpInfo />
      <SignUpForm />
      <SocialMediaGroup scale={scale.MEDIUM} />
    </Container>
  )
}

export default NewsLetter
