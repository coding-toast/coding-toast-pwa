import React from 'react'
import { shallow } from 'enzyme'
import HamburgerButton from '../menu/HamburgerButton'

describe('HamburgerButton', () => {
  it('will render correctly', () => {
    const component = shallow(<HamburgerButton />)
    expect(component).toMatchSnapshot()
  })

  it('will open correctly', async () => {
    const component = shallow(<HamburgerButton />)

    await component.find('.hamburgerButton').simulate('click')

    expect(component).toMatchSnapshot()
  })
})
