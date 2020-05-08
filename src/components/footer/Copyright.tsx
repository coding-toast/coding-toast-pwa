import * as React from 'react'
import { Col } from 'react-bootstrap'

const Copyright: React.FC = () => (
  <Col className="text-center">
    <small className="text-muted">
      &copy; {new Date().getFullYear()} Coding Toast
      <br />
      Quentin Guenther, Nathan Corbin
    </small>
  </Col>
)

export default Copyright
