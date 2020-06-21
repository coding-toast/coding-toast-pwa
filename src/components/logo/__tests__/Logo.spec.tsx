import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Logo from '../Logo'

describe('<Logo />', () => {
  it('renders correctly without fill width', () => {
    const component = shallow(<Logo />)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('renders correctly with fill width', () => {
    const component = shallow(<Logo fillWidth />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
