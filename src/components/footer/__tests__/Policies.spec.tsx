import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Policies from '../Policies'

describe('<Policies />', () => {
  it('renders correctly', () => {
    const component = shallow(<Policies />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
