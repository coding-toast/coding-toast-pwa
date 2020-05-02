import * as React from 'react'
import { Container } from 'react-bootstrap'

export enum BackgroundShade {
  PRIMARY = '#121212',
  SECONDARY = '#121f20'
}

interface ContainerProps {
  backgroundShade: BackgroundShade
}

const SectionContainer: React.FC<ContainerProps> = ({ backgroundShade, children }) => {
  return (
    <section style={{ background: backgroundShade }}>
      <Container>{children}</Container>
    </section>
  )
}

export default SectionContainer
