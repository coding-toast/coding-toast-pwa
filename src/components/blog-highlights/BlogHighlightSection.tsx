import * as React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import SectionContainer, { BackgroundShade } from '../../layout/section-container/SectionContainer';
import BlogListDisplay from './BlogListDisplay';
import { NextSectionStoreContext } from 'stores/NextSectionStore';

const BlogHighlightSection: React.FC = () => {
  const limit = 4;
  const nextSectionStore = React.useContext(NextSectionStoreContext);
  return (
    <SectionContainer backgroundShade={BackgroundShade.SECONDARY}>
      <h1 ref={nextSectionStore.ref}>Catch Up On The Latest</h1>
      <BlogListDisplay limit={limit} />
      <Link href='/blogs'>
        <Button className='btn-accent-secondary' block>
          Checkout All Blog Posts
        </Button>
      </Link>
    </SectionContainer>
  );
};

export default BlogHighlightSection;
