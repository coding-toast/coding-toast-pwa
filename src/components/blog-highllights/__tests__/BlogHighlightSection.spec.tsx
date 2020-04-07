import React from 'react'
import { shallow } from 'enzyme'
import BlogHighlightSection from '../BlogHighlightSection'

describe('<BlogHighlightSection />', () => {
  it('It renders hopefully', () => {
    const foo = shallow(<BlogHighlightSection />)
    expect(foo).toMatchSnapshot()
  })
})
