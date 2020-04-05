import React from 'react'
import renderer from 'react-test-renderer'

import CardBody from '../CardBody'

describe('<CardBody />', () => {
  it('renders correctly without children', () => {
    const tree = renderer.create(<CardBody />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with children', () => {
    const tree = renderer
      .create(
        <CardBody>
          <p>Content</p>
        </CardBody>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
