import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SectionContainer, { BackgroundShade } from '../SectionContainer'

describe('<SectionContainer />', () => {
  const nestedContent = (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
  it('renders correctly with Primary background shade', () => {
    const component = shallow(<SectionContainer backgroundShade={BackgroundShade.PRIMARY}>{nestedContent}</SectionContainer>)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('renders correctly with Secondary background shade', () => {
    const component = shallow(<SectionContainer backgroundShade={BackgroundShade.SECONDARY}>{nestedContent}</SectionContainer>)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('renders correctly with no children', () => {
    const component = shallow(<SectionContainer backgroundShade={BackgroundShade.PRIMARY} />)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('renders correctly with style injected container', () => {
    const component = shallow(<SectionContainer backgroundShade={BackgroundShade.PRIMARY} style={{ height: '80vh' }} />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
