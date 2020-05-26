import * as React from 'react'
import * as Yup from 'yup'
import { Form, Row, Col, Card, Button } from 'react-bootstrap'
import SectionContainer, { BackgroundShade } from '../section-container/SectionContainer'
import { Formik } from 'formik'

const ContactForm = () => {
  const schema = Yup.object({
    name: Yup.string().max(30, 'Please Limit to 30 letters').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    subject: Yup.string().required('Required'),
    message: Yup.string().max(10000, 'Please shorten your message to 10,000 characters').required('Required')
  })
  return (
    <SectionContainer backgroundShade={BackgroundShade.PRIMARY}>
      <Row xs={1} lg={2} className="justify-content-lg-center my-4">
        <Col>
          <Card body style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <Formik
              initialValues={{ name: '', email: '', subject: '', message: '' }}
              validationSchema={schema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
              }}
            >
              {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.name && !!errors.name}
                      isValid={touched.name && !errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.email && !!errors.email}
                      isValid={touched.email && !errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="subject">
                    <Form.Label>Subject Line</Form.Label>
                    <Form.Control
                      as="select"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.subject && !!errors.subject}
                    >
                      <option value="" label="Select a subject line" disabled />
                      <option value="red" label="red" />
                      <option value="blue" label="blue" />
                      <option value="green" label="green" />
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Your message..."
                      rows={3}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.message && !!errors.message}
                      isValid={touched.message && !errors.message}
                    />
                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit" className="btn-accent-secondary" block>
                    Sign Up
                  </Button>
                </Form>
              )}
            </Formik>
          </Card>
        </Col>
      </Row>
    </SectionContainer>
  )
}

export default ContactForm
