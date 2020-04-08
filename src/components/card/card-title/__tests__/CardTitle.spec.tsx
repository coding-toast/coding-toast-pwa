import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CardTitle from '../CardTitle'

describe('<CardTitle />', () => {
  it('renders correctly without a background', () => {
    const component = shallow(<CardTitle title="Lorem Ipsum" />)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('renders correctly with a background', () => {
    const component = shallow(<CardTitle title="Lorem Ipsum" backgroundUrl="test url" />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
