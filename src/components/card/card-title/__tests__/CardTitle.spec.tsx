import React from 'react'
import renderer from 'react-test-renderer'

import CardTitle from '../CardTitle'

describe('<CardTitle />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CardTitle title="Lorem Ipsum" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
