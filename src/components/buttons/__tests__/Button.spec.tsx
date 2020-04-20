import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Button from '../Button'

describe('<Button />', () => {
  it('renders correctly', () => {
    const component = shallow(<Button toUrl="/home" buttonText="test" className="test" />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
