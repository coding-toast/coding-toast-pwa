import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NextSection from '../NextSection'

describe('<NextSection />', () => {
  it('renders correctly', () => {
    const component = shallow(<NextSection />)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('Executes scroll correctly', () => {
    const component = shallow(<NextSection />)
    window.scrollTo = jest.fn()
    component.find('button').simulate('click')
    expect(window.scrollTo).toHaveBeenCalledTimes(1)
  })
})
