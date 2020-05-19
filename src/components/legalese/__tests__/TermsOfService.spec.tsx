import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TermsOfService from '../TermsOfService'

describe('<TermsOfService />', () => {
  it('renders correctly as link', () => {
    const component = shallow(<TermsOfService />)

    expect(toJson(component)).toMatchSnapshot()
  })

  it('renders correctly as muted link', () => {
    const component = shallow(<TermsOfService muted />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
