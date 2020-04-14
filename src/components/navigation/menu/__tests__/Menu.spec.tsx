import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Menu from '../Menu'

describe('Menu', () => {
  it('will render correctly', () => {
    const component = shallow(<Menu />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
