import * as React from 'react';
import MainLayout from '../layout/MainLayout';
import SectionContainer, { BackgroundShade } from 'layout/section-container/SectionContainer';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import ContactForm from 'components/contact-form/ContactForm';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <SectionContainer backgroundShade={BackgroundShade.PRIMARY}>
        <Row xs={1} lg={2} className='justify-content-center mb-5'>
          <Col className='text-center'>
            <h5 className='text-accent-primary'>Got a question?</h5>
            <h1>Contact Coding Toast</h1>
            <p className='text-muted lead'>
              We’re here to help and answer any question you might have. We look forward to hearing from you{' '}
              <span role='img' aria-label='smiley-face'>
                🙂
              </span>
            </p>
          </Col>
        </Row>
        <Row xs={1} lg={2} className='justify-content-center mb-5'>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </SectionContainer>
    </MainLayout>
  );
};

export default HomePage;
