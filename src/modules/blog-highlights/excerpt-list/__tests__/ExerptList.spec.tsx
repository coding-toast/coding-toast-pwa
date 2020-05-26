import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ExerptList from '../ExcerptList'
import { query } from '../__mocks__/card-data'

it('renders correctly', () => {
  const component = shallow(<ExerptList allStrapiBlogs={query} />)
  expect(toJson(component)).toMatchSnapshot()
})
