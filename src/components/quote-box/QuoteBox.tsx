import * as React from 'react'
import QuoteBoxStyles from './QuoteBox.module.scss'

const QuoteCard: React.FC = () => (
  <div className={QuoteBoxStyles.quoteBox}>
    <p className={`text-color-primary text-style-lead ${QuoteBoxStyles.textQuote}`}>
      Because it takes more than going over your git log before standup to become a great engineer.
    </p>
  </div>
)

export default QuoteCard
