import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CardDescription from '../CardDescription'

describe('<CardDescription />', () => {
  it('renders correctly', () => {
    const component = shallow(<CardDescription text="Content" />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
