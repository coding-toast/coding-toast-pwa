import * as React from 'react'
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'

const SignUpForm: React.FC = () => {
  const schema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    acceptedTerms: Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions.')
  })

  return (
    <Row xs={1} lg={2} className="justify-content-lg-center my-4">
      <Col>
        <Card body style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
          <h2 className="mb-4">Never miss a beat with our Newsletter!</h2>
          <p className="text-muted my-1">We email a couple of times a month.</p>
          <p className="text-muted my-1">No spam.</p>
          <p className="text-muted my-1">Just the best developer tips.</p>
          <hr />
          <Formik
            initialValues={{ email: '', acceptedTerms: true }}
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
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && !isValid}
                    isValid={touched.email && isValid}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group controlId="acceptedTerms">
                  <Form.Check type="checkbox">
                    <Form.Check.Input
                      type="checkbox"
                      checked={values.acceptedTerms}
                      onChange={handleChange}
                      isInvalid={touched.acceptedTerms && !isValid}
                    />
                    <Form.Check.Label className="small text-muted">
                      I agree to my email being stored and used to receive the newsletter
                    </Form.Check.Label>
                    <Form.Control.Feedback type="invalid">{errors.acceptedTerms}</Form.Control.Feedback>
                  </Form.Check>
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
  )
}

export default SignUpForm
