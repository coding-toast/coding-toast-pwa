import React from 'react'
import renderer from 'react-test-renderer'

import CardDescription from '../CardDescription'

describe('<CardDescription />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CardDescription text="Content" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
