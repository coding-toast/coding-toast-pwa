import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SocialMediaGroup from '../SocialMediaGroup'
import { scale } from '../../types'

describe('<SocialMediaGroup />', () => {
  it('renders correctly scale=small', () => {
    const component = shallow(<SocialMediaGroup scale={scale.SMALL} />)
    expect(toJson(component)).toMatchSnapshot()
  })
  it('renders correctly scale=medium', () => {
    const component = shallow(<SocialMediaGroup scale={scale.MEDIUM} />)
    expect(toJson(component)).toMatchSnapshot()
  })
  it('renders correctly scale=large', () => {
    const component = shallow(<SocialMediaGroup scale={scale.LARGE} />)
    expect(toJson(component)).toMatchSnapshot()
  })
  it('renders correctly with no scale modifier', () => {
    const component = shallow(<SocialMediaGroup />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
