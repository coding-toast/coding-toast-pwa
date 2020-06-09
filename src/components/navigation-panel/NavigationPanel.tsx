import * as React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import Logo from '../navigation/logo/Logo'

const NavigationPanel: React.FC = () => (
  <Navbar collapseOnSelect expand={false} fixed="top" sticky="top" bg="dark" variant="dark" className="bg-background-primary">
    <Navbar.Brand>
      <Link to="/">
        <Logo />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="text-right">
        <Nav.Item>
          <Nav.Link>
            <Link to="/m" className="text-text-color-primary">
              Blog
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/resources" className="text-text-color-primary">
              Resources
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/contact" className="text-text-color-primary">
              Contact
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavigationPanel
