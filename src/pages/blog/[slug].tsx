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
import { EmailShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { EmailIcon, LinkedinIcon, TwitterIcon } from 'react-share';

const Post: React.FC = () => {
  const router = useRouter();
  const [url, setUrl] = React.useState('');
  React.useEffect(() => {
    setUrl(window.location.href);
  });
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
        <header>
          <h1>{blog.title}</h1>
          <h2 className='text-muted h3'>
            published <DateDisplay date={new Date(blog.publishDate)} />
          </h2>
          <div className='px-0 py-1 mt-3' style={{ height: '3em' }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${blog.author.avatar.url}`}
              style={{ display: 'inline-block', height: '100%', borderRadius: '50%' }}
            />
            <p style={{ display: 'inline-block', fontSize: '1.15em' }} className='mx-2 text-muted'>
              {blog.author.displayName}
            </p>
          </div>
        </header>
        <hr />
        <Image src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${blog.banner.url}`} alt={blog.banner.alternativeText} fluid />
        <article className='mx-auto my-5' style={{ width: '80vw', maxWidth: '800px', letterSpacing: '0.05em', wordWrap: 'break-word' }}>
          <ReactMarkdown
            source={blog.content}
            linkTarget='_blank'
            renderers={{
              code: CodeBlock,
              inlineCode: InlineCode
            }}
          />
        </article>
        <div className='px-0 py-1 mt-3' style={{ height: '3em' }}>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${blog.author.avatar.url}`}
            style={{ display: 'inline-block', height: '100%', borderRadius: '50%' }}
          />
          <p style={{ display: 'inline-block', fontSize: '1.15em' }} className='mx-2 text-muted'>
            {blog.author.displayName}
          </p>
        </div>
        <hr />
        <aside className='text-center mx-auto'>
          <h1>Did you like this article?</h1>
          <p>It would mean a lot to us if you would share it too!</p>
          <TwitterShareButton url={url}>
            <TwitterIcon />
          </TwitterShareButton>
          <LinkedinShareButton url={url} title={blog.title} summary={blog.description} source='Coding Toast'>
            <LinkedinIcon />
          </LinkedinShareButton>
          <EmailShareButton url={url} subject={blog.title} body={blog.description}>
            <EmailIcon />
          </EmailShareButton>
        </aside>
      </SectionContainer>
    </MainLayout>
  );
};

export default Post;
