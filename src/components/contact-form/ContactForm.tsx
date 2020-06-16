import * as React from 'react'
import * as Yup from 'yup'
import { Form, Card, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import { API_ROOT } from 'gatsby-env-variables'
import { postData } from '../../helpers/postData'

const ContactForm = () => {
  const schema = Yup.object({
    name: Yup.string().max(30, 'Please Limit to 30 letters').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().max(10000, 'Please shorten your message to 10,000 characters').required('Required')
  })
  return (
    <Card body style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            postData(`${API_ROOT}/contacts`, values).then((data) => console.log(data))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
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
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default ContactForm
