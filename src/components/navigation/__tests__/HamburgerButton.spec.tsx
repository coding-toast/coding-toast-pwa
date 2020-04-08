import React from 'react'
import renderer, { act } from 'react-test-renderer'

import HamburgerButton from '../menu/HamburgerButton'

describe('HamburgerButton', () => {
  it('renders correctly', () => {
    const component = renderer.create(<HamburgerButton />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('renders opened correctly', () => {
    const component = renderer.create(<HamburgerButton />)

    act(() => {
      component.root.findByType('button').props.onClick()
    })

    expect(component.toJSON()).toMatchSnapshot()
  })
})
