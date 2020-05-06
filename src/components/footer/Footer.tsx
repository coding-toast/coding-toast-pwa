import * as React from 'react'
import Container, { BackgroundShade } from '../section-container/SectionContainer'
import FooterStyles from './Footer.module.scss'
import Copyright from './Copyright'
import Logo from '../navigation/logo/Logo'
import Policies from './Policies'
import SocialMedia, { scale } from './SocialMedia'
import { Row, Col } from 'react-bootstrap'

const Footer: React.FC = () => (
  <Container backgroundShade={BackgroundShade.SECONDARY}>
    <Row className="justify-content-md-center">
      <Col md="auto">
        <Logo styles={FooterStyles} />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col>
        <p className={FooterStyles.lead}>Follow Us</p>
        <SocialMedia scale={scale.SMALL} />
      </Col>
    </Row>
    <Policies />
    <Copyright />
  </Container>
)

export default Footer
