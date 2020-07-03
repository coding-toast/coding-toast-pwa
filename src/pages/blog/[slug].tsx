import { useRouter } from 'next/router';
import * as React from 'react';
import GET_BLOG from '../../queries/get-blog.query';
import { useQuery } from '@apollo/react-hooks';
import Image from 'react-bootstrap/Image';
import { Spinner } from 'react-bootstrap';
import SectionContainer, { BackgroundShade } from 'layout/section-container/SectionContainer';
import MainLayout from 'layout/MainLayout';
import { DateDisplay } from 'components';
import ReactMarkdown from 'react-markdown';

const Post: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, loading, error } = useQuery(GET_BLOG, { variables: { slug } });

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

  const blog = data.blogs[0];

  return (
    <MainLayout>
      <SectionContainer backgroundShade={BackgroundShade.PRIMARY}>
        <h1>{blog.title}</h1>
        <h2 className='text-muted h3'>
          published <DateDisplay date={new Date(blog.createdAt)} />
        </h2>
        <hr />
        <Image src={blog.banner} fluid />
        <ReactMarkdown source={blog.content} />
      </SectionContainer>
    </MainLayout>
  );
};

export default Post;
