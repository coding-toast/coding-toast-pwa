import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LegaleseDialog from '../LegaleseDialog'

describe('<LegaleseDialog />', () => {
  it('renders correctly as link', () => {
    const component = shallow(<LegaleseDialog title="test title" />)

    expect(toJson(component)).toMatchSnapshot()
  })

  it('renders correctly as muted link', () => {
    const component = shallow(<LegaleseDialog title="test title" muted />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
