import * as React from 'react';
import MainLayout from '../layout/MainLayout';
import { Header } from 'components';
import BlogHighlightSection from 'components/blog-highlights/BlogHighlightSection';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Header />
      <BlogHighlightSection />
    </MainLayout>
  );
};

export default HomePage;
