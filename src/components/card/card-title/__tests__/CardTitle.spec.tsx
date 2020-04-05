import React from 'react'
import renderer from 'react-test-renderer'

import CardTitle from '../CardTitle'

describe('<CardTitle />', () => {
  it('renders correctly without a background', () => {
    const tree = renderer.create(<CardTitle title="Lorem Ipsum" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with a background', () => {
    const tree = renderer.create(<CardTitle title="Lorem Ipsum" backgroundUrl="test url" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
