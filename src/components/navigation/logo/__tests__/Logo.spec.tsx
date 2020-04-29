import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Logo from '../Logo'
import LogoStyles from '../Logo.module.scss'

describe('<Logo />', () => {
  it('renders correctly', () => {
    const component = shallow(<Logo styles={LogoStyles} />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
