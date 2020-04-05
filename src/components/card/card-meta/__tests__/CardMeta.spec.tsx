import React from 'react'
import renderer from 'react-test-renderer'

import CardMeta from '../CardMeta'

describe('<CardMeta />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CardMeta publishDate="November 11, 2016" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
