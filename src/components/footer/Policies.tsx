import * as React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { PrivacyPolicy, TermsOfService } from '../legalese'

const Policies: React.FC = () => {
  return (
    <Container style={{ maxWidth: '30em' }}>
      <Row>
        <Col className="text-left">
          <PrivacyPolicy muted />
        </Col>
        <Col className="text-right">
          <TermsOfService muted />
        </Col>
      </Row>
    </Container>
  )
}

export default Policies
