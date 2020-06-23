import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { Logo } from 'components';
import RouteLink from './RouteLink';

const pageLinks = [
  {
    href: '/blog',
    label: 'Blog'
  },
  {
    href: '/resources',
    label: 'Resources'
  },
  {
    href: '/contact',
    label: 'Contact'
  }
];

const navLinks = pageLinks.map((element) => <RouteLink key={element.href} href={element.href} label={element.label} />);

const NavigationPanel: React.FC = () => (
  <Navbar collapseOnSelect expand={false} fixed='top' sticky='top' bg='dark' variant='dark' className='bg-background-primary'>
    <Navbar.Brand>
      <Link href='/'>
        <Logo />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='text-right'>{navLinks}</Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationPanel;
