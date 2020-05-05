import * as React from 'react'
import QuoteBoxStyles from './QuoteBox.module.scss'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import QuoteImage from '../../images/quote.png'

const QuoteCard: React.FC = () => (
  <Jumbotron className={QuoteBoxStyles.quoteBox}>
    <blockquote className={`text-color-primary text-style-lead ${QuoteBoxStyles.textQuote}`}>
      Because it takes more than going over your git log before standup to become a great engineer.
    </blockquote>
  </Jumbotron>
)

export default QuoteCard
