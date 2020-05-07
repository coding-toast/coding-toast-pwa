import * as React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap'

const Policies: React.FC = () => {
  return (
    <Container style={{ maxWidth: '30em' }}>
      <Row>
        <Col className="text-left">
          <Link to="/" className="text-muted">
            Privacy Policy
          </Link>
        </Col>
        <Col className="text-right">
          <Link to="/" className="text-muted">
            Terms of Service
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Policies
