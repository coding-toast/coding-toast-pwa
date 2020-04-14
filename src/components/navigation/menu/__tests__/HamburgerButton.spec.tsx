import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import HamburgerButton from '../HamburgerButton'

describe('HamburgerButton', () => {
  it('will render correctly', () => {
    const component = shallow(<HamburgerButton />)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('will open correctly', async () => {
    const component = shallow(<HamburgerButton />)

    await component.find('button').simulate('click')

    expect(toJson(component)).toMatchSnapshot()
  })
})
