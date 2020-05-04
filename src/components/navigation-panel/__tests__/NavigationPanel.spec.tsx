import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Navbar from '../NavigationPanel'

describe('<Navbar />', () => {
  it('renders correctly', () => {
    const component = shallow(<Navbar />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
