import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RouteLink from '../NavigationPanel'

describe('<RouteLink />', () => {
  it('renders correctly', () => {
    const component = shallow(<RouteLink />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
