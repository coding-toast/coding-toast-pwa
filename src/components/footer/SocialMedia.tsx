import * as React from 'react'
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
          <img src={RedditIcon} className={FooterStyles.icon} alt="Reddit" />
        </div>
        <div className={FooterStyles.column}>
          <img src={TwitterIcon} className={FooterStyles.icon} alt="Twitter" />
        </div>
        <div className={FooterStyles.column}>
          <img src={RSSIcon} className={FooterStyles.icon} alt="RSS" />
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
