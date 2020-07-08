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
import CodeBlock from 'components/code/CodeBlock';
import InlineCode from 'components/code/InlineCode';
import { logEvent, logException } from 'utils/analytics';

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
    logException(error.message);
    return (
      <div>
        <h2 className='h2'>Opus! We encountered a problem.</h2>
        <p>Please try looking back later!</p>
      </div>
    );
  }

  const blog = data.blogs[0];
  logEvent('Blogs', `Fetched ${blog.slug}`);

  return (
    <MainLayout>
      <SectionContainer backgroundShade={BackgroundShade.PRIMARY}>
        <h1>{blog.title}</h1>
        <h2 className='text-muted h3'>
          published <DateDisplay date={new Date(blog.publishDate)} />
        </h2>
        <hr />
        <Image src={`https://aqueous-taiga-17941.herokuapp.com${blog.banner.formats?.large.url}`} alt={blog.banner.alternativeText} fluid />
        <div className='mx-auto my-5' style={{ width: '80vw', maxWidth: '800px', letterSpacing: '0.05em', wordWrap: 'break-word' }}>
          <ReactMarkdown
            source={blog.content}
            linkTarget='_blank'
            renderers={{
              code: CodeBlock,
              inlineCode: InlineCode
            }}
          />
        </div>
        <Image
          src={`https://aqueous-taiga-17941.herokuapp.com${blog.author.avatar.formats.small.url}`}
          alt={blog.author.avatar.alternativeText}
        />
        <p>{blog.author.displayName}</p>
      </SectionContainer>
    </MainLayout>
  );
};

export default Post;
