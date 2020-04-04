import * as React from 'react'
import QuoteImage from '../images/quote.png'

const cardStyles = {
  margin: '0 auto',
  padding: '65px 27px 49px 27px',
  background: 'rgba(255, 255, 255, 0.05)',
  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '10px'
}

const quoteStyles = {
  display: 'inline-block',
  paddingLeft: '10px',
  fontFamily: 'Fira Sans',
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '24px',
  lineHeight: '29px',
  letterSpacing: '0.04em',
  fontVariant: 'small-caps',
  maxWidth: '316px',
  left: 43
}

const quoteImageStyles = {
  position: 'relative' as 'relative',
  left: '-18px',
  top: '18px'
}

const QuoteCard: React.FC = () => (
  <div className="card" style={cardStyles}>
    <img src={QuoteImage} style={quoteImageStyles} alt="Quote" />
    <p style={quoteStyles}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ea facere tempore vitae molestias, optio deleniti eveniet modi expedita
      accusamus autem pariatur omnis debitis nam, saepe soluta iusto praesentium blanditiis! lor
    </p>
  </div>
)

export default QuoteCard
