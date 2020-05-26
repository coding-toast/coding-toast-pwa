import * as React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import ContactForm from '../components/contact-form/ContactForm'
import { Form, Row, Col, Card, Button } from 'react-bootstrap'
import SectionContainer, { BackgroundShade } from '../components/section-container/SectionContainer'

const ContactPage = () => (
  <IndexLayout>
    <Page>
      <SectionContainer backgroundShade={BackgroundShade.PRIMARY}>
        <Row xs={1} lg={2} className="justify-content-center mb-5">
          <Col className="text-center">
            <h5 className="text-accent-primary">Got a question?</h5>
            <h1>Contact Coding Toast</h1>
            <p className="text-muted lead">
              We’re here to help and answer any question you might have. We look forward to hearing from you 🙂
            </p>
          </Col>
        </Row>
        <Row xs={1} lg={2}>
          <Col>
            <ContactForm />
          </Col>
          <Col className="my-auto">
            <h1>How Can We Help?</h1>
            <p className="text-muted">
              Please select a topic below related to your inquiry. If you don’t find what you need, fill out our contact form.
            </p>
          </Col>
        </Row>
      </SectionContainer>
    </Page>
  </IndexLayout>
)

export default ContactPage
