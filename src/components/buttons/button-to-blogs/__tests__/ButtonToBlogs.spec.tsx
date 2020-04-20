import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ButtonToBlogs from '../ButtonToBlogs'

describe('<ButtonToBlogs />', () => {
  it('renders correctly without children', () => {
    const component = shallow(<ButtonToBlogs />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
