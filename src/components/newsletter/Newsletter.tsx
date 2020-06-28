import * as React from 'react';
import Container, { BackgroundShade } from '../../layout/section-container/SectionContainer';
import SignUpInfo from './SignUpInfo';
import SignUpForm from './SignUpForm';
import { SocialMediaGroup, SocialIconScale } from 'components';

const NewsLetter: React.FC = () => {
  return (
    <Container backgroundShade={BackgroundShade.PRIMARY}>
      <SignUpInfo />
      <SignUpForm />
      <SocialMediaGroup iconScale={SocialIconScale.MEDIUM} />
    </Container>
  );
};

export default NewsLetter;
