import React from 'react'
import { shallow } from 'enzyme'
import CardDescription from '../CardDescription'

describe('<CardDescription />', () => {
  it('renders correctly', () => {
    const component = shallow(<CardDescription text="Content" />)
    expect(component).toMatchSnapshot()
  })
})
