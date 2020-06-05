import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import BasicCard from '../BasicCard'

describe('<BasicCard />', () => {
  it('renders correctly', () => {
    const component = shallow(<BasicCard id="1" title="test" banner="test" description="test" publishDate="6/5/2020" />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
