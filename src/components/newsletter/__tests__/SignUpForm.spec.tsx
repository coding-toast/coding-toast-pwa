import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SignUpForm from '../SignUpForm'

describe('<SignUpForm />', () => {
  it('renders correctly', () => {
    const component = shallow(<SignUpForm />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
