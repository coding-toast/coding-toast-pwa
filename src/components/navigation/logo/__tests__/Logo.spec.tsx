import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Logo from '../Logo'

describe('<Logo />', () => {
  it('renders correctly', () => {
    const component = shallow(<Logo />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
