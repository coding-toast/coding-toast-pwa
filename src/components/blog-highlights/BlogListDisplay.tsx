import * as React from 'react';
import GET_BLOGS from '../../queries/get-blogs.query';
import { useQuery } from '@apollo/react-hooks';
import ExcerptList from './excerpt-list/ExcerptList';
import { Spinner } from 'react-bootstrap';
import { logEvent, logException } from 'utils/analytics';

interface IBlogListDisplayProps {
  limit: number;
}

const BlogListDisplay: React.FC<IBlogListDisplayProps> = (props) => {
  const { limit } = props;
  const { data, loading, error } = useQuery(GET_BLOGS, { variables: { limit } });

  if (loading) {
    return (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading Highlighted Posts</span>
      </Spinner>
    );
  }
  if (error) {
    logException(error.message);
    return (
      <div>
        <h2 className='h2'>Opus! We encountered a problem.</h2>
        <p>Please try looking back later!</p>
      </div>
    );
  }

  logEvent('Blogs', 'Fetched Latest');
  return <ExcerptList blogs={data.blogs} />;
};

export default BlogListDisplay;
