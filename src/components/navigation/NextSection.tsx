import * as React from './node_modules/react'
import NextSectionImage from '../../images/next-section.png'

const nextSectionStyles = {
  position: 'absolute' as 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: 0,
  right: 0,
  top: '88vh'
}

const NextSection: React.FC = () => (
  <div>
    <img src={NextSectionImage} alt="Next Section" style={nextSectionStyles} />
  </div>
)

export default NextSection
