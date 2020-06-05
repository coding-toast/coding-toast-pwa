import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ContactForm from '../ContactForm'

describe('<ContactForm />', () => {
  it('renders correctly', () => {
    const component = shallow(<ContactForm />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
