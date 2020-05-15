import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SignUpInfo from '../SignUpInfo'

describe('<SignUpInfo />', () => {
  it('renders correctly', () => {
    const component = shallow(<SignUpInfo />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
