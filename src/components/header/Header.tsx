import * as React from 'react';
import Container, { BackgroundShade } from '../../layout/section-container/SectionContainer';
import { QuoteBox, Logo } from 'components';
import NextSection from 'components/next-section/NextSection';

const Header: React.FC = () => (
  <Container backgroundShade={BackgroundShade.PRIMARY} style={{ minHeight: 'calc(73vh + 77px)' }}>
    <Logo fillWidth />
    <QuoteBox />
    <NextSection />
  </Container>
);

export default Header;
