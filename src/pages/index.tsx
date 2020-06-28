import * as React from 'react';
import MainLayout from '../layout/MainLayout';
import { Header } from 'components';
import BlogHighlightSection from 'components/blog-highlights/BlogHighlightSection';
import NewsLetter from 'components/newsletter/Newsletter';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Header />
      <BlogHighlightSection />
      <NewsLetter />
    </MainLayout>
  );
};

export default HomePage;
