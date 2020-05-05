import * as React from 'react'
import { Jumbotron } from 'react-bootstrap'
import QuoteBoxStyles from './QuoteBox.module.scss'

const QuoteCard: React.FC = () => (
  <Jumbotron className={QuoteBoxStyles.quoteBox}>
    <blockquote className={`text-color-primary text-style-lead ${QuoteBoxStyles.textQuote}`}>
      Because it takes more than going over your git log before standup to become a great engineer.
    </blockquote>
  </Jumbotron>
)

export default QuoteCard
