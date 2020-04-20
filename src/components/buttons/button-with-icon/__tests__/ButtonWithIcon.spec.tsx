import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { ButtonWithIcon } from '../ButtonWithIcon'

describe('<ButtonWithIcon />', () => {
  it('renders correctly', () => {
    const component = shallow(<ButtonWithIcon />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
