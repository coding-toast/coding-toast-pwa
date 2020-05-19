import * as React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap'
import LegaleseDialog from '../legalese/dialog/LegaleseDialog'
import TermsOfService from '../legalese/TermsOfService'
import PrivacyPolicy from '../legalese/PrivacyPolicy'

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
