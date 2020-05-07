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
    <Row className="justify-content-md-center">
      <Col md="auto">
        <Logo styles={FooterStyles} />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col>
        <p className={FooterStyles.lead}>Follow Us</p>
        <SocialMediaGroup scale={scale.SMALL} />
      </Col>
    </Row>
    <Policies />
    <Copyright />
  </Container>
)

export default Footer
