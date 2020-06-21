import * as React from 'react';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';

interface IRouteLinkProps {
  href: string;
  label: string;
}

const RouteLink: React.FC<IRouteLinkProps> = (props) => (
  <Nav.Item>
    <Nav.Link>
      <Link href={props.href} passHref>
        <a className='text-text-color-primary'>{props.label}</a>
      </Link>
    </Nav.Link>
  </Nav.Item>
);

export default RouteLink;
