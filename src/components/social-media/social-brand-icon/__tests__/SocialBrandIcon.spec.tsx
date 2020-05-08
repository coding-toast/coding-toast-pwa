import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SocialBrandIcon from '../SocialBrandIcon'
import TwitterIcon from '../../../../images/Twitter.svg'

describe('<SocialBrandIcon />', () => {
  it('renders correctly', () => {
    const brand = {
      name: 'Twitter',
      logo: TwitterIcon,
      href: '/'
    }
    const component = shallow(<SocialBrandIcon brand={brand} size={2} />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
