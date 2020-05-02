import * as React from 'react'
import { Link } from 'gatsby'
import RedditIcon from '../../images/Reddit.svg'
import TwitterIcon from '../../images/Twitter.svg'
import RSSIcon from '../../images/RSS.svg'

interface StyleProps {
  styles: CSSModule
}

const SocialMedia: React.FC<StyleProps> = (props) => {
  const { styles } = props
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.column}>
          <Link to="/">
            <img src={RedditIcon} className={styles.icon} alt="Reddit" />
          </Link>
        </div>
        <div className={styles.column}>
          <Link to="/">
            <img src={TwitterIcon} className={styles.icon} alt="Twitter" />
          </Link>
        </div>
        <div className={styles.column}>
          <Link to="/">
            <img src={RSSIcon} className={styles.icon} alt="RSS" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
