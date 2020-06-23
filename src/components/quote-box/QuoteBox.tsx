import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';

const QuoteBox: React.FC = () => (
  <Jumbotron className='quote-box'>
    <blockquote className={'text-color-primary text-style-lead text-quote'}>
      Because it takes more than going over your git log before standup to become a great engineer.
    </blockquote>
  </Jumbotron>
);

export default QuoteBox;
