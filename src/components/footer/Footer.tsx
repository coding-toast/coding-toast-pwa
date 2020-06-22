import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container, { BackgroundShade } from '../../layout/section-container/SectionContainer';
import { Copyright, Logo, Policies, SocialMediaGroup, SocialIconScale } from 'components';

const Footer: React.FC = () => (
  <Container backgroundShade={BackgroundShade.SECONDARY}>
    <Row className='justify-content-center' style={{ margin: '2em 0' }}>
      <Col xs='auto'>
        <Logo />
      </Col>
    </Row>
    <Row className='justify-content-center' style={{ margin: '2em 0' }}>
      <Col className='text-center'>
        <p className='text-muted lead'>Follow Us</p>
        <SocialMediaGroup iconScale={SocialIconScale.SMALL} />
      </Col>
    </Row>
    <Row style={{ margin: '2em 0' }}>
      <Policies />
    </Row>
    <Row style={{ margin: '2em 0' }}>
      <Copyright />
    </Row>
  </Container>
);

export default Footer;
