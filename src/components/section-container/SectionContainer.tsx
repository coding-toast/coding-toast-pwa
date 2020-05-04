import * as React from 'react'
import { Container } from 'react-bootstrap'

export enum BackgroundShade {
  PRIMARY = '#121212',
  SECONDARY = '#121f20'
}

interface ContainerProps {
  backgroundShade: BackgroundShade
  style?: React.CSSProperties
}

const SectionContainer: React.FC<ContainerProps> = ({ backgroundShade, style, children }) => {
  return (
    <section style={{ background: backgroundShade, paddingTop: '4em', paddingBottom: '3em', position: 'relative' }}>
      <Container style={style}>{children}</Container>
    </section>
  )
}

export default SectionContainer
