import * as React from 'react';
import Head from 'next/head';
import NavigationPanel from '../../components/navigation-panel/NavigationPanel';
import Footer from '../../components/footer/Footer';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='content-language' content='en-us' />
        <meta name='description' content='Free Web tutorials' />
        <meta name='keywords' content='HTML, CSS, JavaScript' />
        <meta name='author' content='John Doe' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:title' content='Your eye-catching title here' />
        <meta name='twitter:title' content='Your title here' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary' />
        <meta property='og:description' content='Your entertaining and descriptive copy here, if your meta description is good, use it.' />
        <meta name='twitter:description' content='Your 200-character description here' />
        <meta property='og:image' content='http://www.yourdomain.com/image-name.jpg' />
        <meta name='twitter:image' content='http://www.yourdomain.com /image-name.jpg' />
        <title>My page title</title>
      </Head>
      <NavigationPanel />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
