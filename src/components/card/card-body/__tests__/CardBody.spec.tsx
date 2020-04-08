import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CardBody from '../CardBody'

describe('<CardBody />', () => {
  it('renders correctly without children', () => {
    const component = shallow(<CardBody />)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('renders with children', () => {
    const component = shallow(
      <CardBody>
        <p>Content</p>
      </CardBody>
    )

    expect(toJson(component)).toMatchSnapshot()
  })
})
