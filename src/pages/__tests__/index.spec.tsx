import * as React from 'react'
import { mount } from 'enzyme'
import HomePage from '../index'

describe('Pages', () => {
  describe('Index', () => {
    it('should render correctly', () => {
      const wrapper = mount(<HomePage />)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
