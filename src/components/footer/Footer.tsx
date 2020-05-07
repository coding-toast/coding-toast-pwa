import * as React from 'react'
import Container, { BackgroundShade } from '../section-container/SectionContainer'
import FooterStyles from './Footer.module.scss'
import Copyright from './Copyright'
import Logo from '../navigation/logo/Logo'
import Policies from './Policies'
import { Row, Col } from 'react-bootstrap'
import { SocialMediaGroup, scale } from '../social-media/'

const Footer: React.FC = () => (
  <Container backgroundShade={BackgroundShade.SECONDARY}>
    <Row className="justify-content-md-center" style={{ margin: '2em 0' }}>
      <Col md="auto">
        <Logo styles={FooterStyles} />
      </Col>
    </Row>
    <Row className="justify-content-md-center" style={{ margin: '2em 0' }}>
      <Col className="text-center">
        <p className={`${FooterStyles.lead} text-muted lead`}>Follow Us</p>
        <SocialMediaGroup scale={scale.SMALL} />
      </Col>
    </Row>
    <Row style={{ margin: '2em 0' }}>
      <Policies />
    </Row>
    <Row style={{ margin: '2em 0' }}>
      <Copyright />
    </Row>
  </Container>
)

export default Footer
