import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SocialMedia from '../SocialMedia'
import FooterStyles from '../Footer.module.scss'

describe('<SocialMedia />', () => {
  it('renders correctly', () => {
    const component = shallow(<SocialMedia styles={FooterStyles} />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
