import * as React from 'react'
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'

const SignUpForm: React.FC = () => {
  const [validated, setValidated] = React.useState(false)

  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void }) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <Row xs={1} lg={2} className="justify-content-lg-center my-4">
      <Col>
        <Card body={true} style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
          <h2 className="mb-4">Never miss a beat with our Newsletter!</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group controlId="Terms and Conditions">
              <Form.Check type="checkbox">
                <Form.Check.Input type="checkbox" checked />
                <Form.Check.Label className="small text-muted">
                  I have read and agree to the <Link to="">Terms and Conditions</Link> and <Link to="">Privacy Policy</Link>
                </Form.Check.Label>
              </Form.Check>
            </Form.Group>
            <Button type="submit" className="btn-accent-secondary" block>
              Sign Up
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default SignUpForm
