import RedditIcon from '../../../images/Reddit.svg'
import TwitterIcon from '../../../images/Twitter.svg'
import RSSIcon from '../../../images/RSS.svg'
import { SocialBrand } from '../types'

const socialIcons: Array<SocialBrand> = [
  {
    name: 'Twitter',
    logo: TwitterIcon,
    href: '/'
  },
  {
    name: 'Reddit',
    logo: RedditIcon,
    href: '/'
  },
  {
    name: 'RSS',
    logo: RSSIcon,
    href: '/'
  }
]

export default socialIcons
