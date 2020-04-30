import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SocialMedia from '../SocialMedia'

describe('<SocialMedia />', () => {
  it('renders correctly', () => {
    const component = shallow(<SocialMedia />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
