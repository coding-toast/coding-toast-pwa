import * as React from 'react';
import GET_BLOGS from '../../queries/get-blogs.query';
import { useQuery } from '@apollo/react-hooks';
import ExcerptList from './excerpt-list/ExcerptList';
import { Spinner } from 'react-bootstrap';

const BlogListDisplay = () => {
  const { data, loading, error } = useQuery(GET_BLOGS, { variables: { limit: 4 } });

  if (loading) {
    return (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading Highlighted Posts</span>
      </Spinner>
    );
  }
  if (error) {
    return (
      <div>
        <h2 className='h2'>Opus! We encountered a problem.</h2>
        <p>Please try looking back later!</p>
      </div>
    );
  }
  return <ExcerptList blogs={data.blogs} />;
};

export default BlogListDisplay;
