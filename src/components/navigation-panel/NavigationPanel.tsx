import * as React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import Logo from '../navigation/logo/Logo'

const NavigationPanel: React.FC = () => (
  <Navbar collapseOnSelect expand={false} fixed="top" sticky="top" bg="dark" variant="dark">
    <Navbar.Brand>
      <Link to="/">
        <Logo />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link>
            <Link to="/m">Blog</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/m">Resources</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavigationPanel
