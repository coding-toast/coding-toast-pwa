import * as React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import SectionContainer, { BackgroundShade } from '../../layout/section-container/SectionContainer';
import BlogListDisplay from './BlogListDisplay';

const BlogHighlightSection: React.FC = () => {
  return (
    <SectionContainer backgroundShade={BackgroundShade.SECONDARY}>
      <h1>Catch Up On The Latest</h1>
      <BlogListDisplay />
      <Link href='/blogs'>
        <Button className='btn-accent-secondary' block>
          Checkout All Blog Posts
        </Button>
      </Link>
    </SectionContainer>
  );
};

export default BlogHighlightSection;
