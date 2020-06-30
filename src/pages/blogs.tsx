import * as React from 'react';
import MainLayout from '../layout/MainLayout';
import BlogListDisplay from 'components/blog-highlights/BlogListDisplay';
import SectionContainer, { BackgroundShade } from 'layout/section-container/SectionContainer';

const HomePage: React.FC = () => {
  const limit = 10000;
  return (
    <MainLayout>
      <SectionContainer backgroundShade={BackgroundShade.PRIMARY}>
        <h1 className={'display-3 text-center'}>The latest</h1>
        <hr />
        <BlogListDisplay limit={limit} />
      </SectionContainer>
    </MainLayout>
  );
};

export default HomePage;
