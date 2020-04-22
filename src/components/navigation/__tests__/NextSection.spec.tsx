import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NextSection from '../NextSection'

describe('<NextSection />', () => {
  it('renders correctly', () => {
    const component = shallow(<NextSection />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
