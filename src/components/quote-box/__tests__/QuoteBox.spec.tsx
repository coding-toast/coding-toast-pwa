import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import QuoteBox from '../QuoteBox'

describe('<QuoteBox />', () => {
  it('renders correctly', () => {
    const component = shallow(<QuoteBox />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
