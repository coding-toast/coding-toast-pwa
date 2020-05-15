import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Newsletter from '../Newsletter'

describe('<Newsletter />', () => {
  it('renders correctly', () => {
    const component = shallow(<Newsletter />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
