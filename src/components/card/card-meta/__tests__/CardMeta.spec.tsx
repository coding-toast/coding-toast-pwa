import React from 'react'
import { shallow } from 'enzyme'

import CardMeta from '../CardMeta'

describe('<CardMeta />', () => {
  it('renders correctly', () => {
    const component = shallow(<CardMeta publishDate="November 11, 2016" />)
    expect(component).toMatchSnapshot()
  })
})
