import React from 'react'
import renderer from 'react-test-renderer'
import ExerptList from '../ExerptList'
import { query } from '../__mocks__/card-data'

it('renders correctly', () => {
  const tree = renderer.create(<ExerptList allMarkdownRemark={query} />).toJSON()
  expect(tree).toMatchSnapshot()
})
