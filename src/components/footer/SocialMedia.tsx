import * as React from 'react'
import { Link } from 'gatsby'
import RedditIcon from '../../images/Reddit.svg'
import TwitterIcon from '../../images/Twitter.svg'
import RSSIcon from '../../images/RSS.svg'
import FooterStyles from './Footer.module.scss'

const SocialMedia: React.FC = () => {
  return (
    <div>
      <p className={FooterStyles.lead}>Follow Us</p>
      <div className={FooterStyles.row}>
        <div className={FooterStyles.column}>
          <Link to="/">
            <img src={RedditIcon} className={FooterStyles.icon} alt="Reddit" />
          </Link>
        </div>
        <div className={FooterStyles.column}>
          <Link to="/">
            <img src={TwitterIcon} className={FooterStyles.icon} alt="Twitter" />
          </Link>
        </div>
        <div className={FooterStyles.column}>
          <Link to="/">
            <img src={RSSIcon} className={FooterStyles.icon} alt="RSS" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
