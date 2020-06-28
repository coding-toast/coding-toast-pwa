import * as React from 'react';
import Container, { BackgroundShade } from '../../layout/section-container/SectionContainer';
import { QuoteBox, Logo } from 'components';
const Header: React.FC = () => (
  <Container backgroundShade={BackgroundShade.PRIMARY} style={{ minHeight: 'calc(73vh + 77px)' }}>
    <Logo fillWidth />
    <QuoteBox />
  </Container>
);

export default Header;
