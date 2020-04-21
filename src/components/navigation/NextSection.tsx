import * as React from 'react'
import NextSectionImage from '../../images/next-section.png'
import NextSectionStyles from './NextSection.module.scss'

const NextSection: React.FC = () => (
  <div>
    <img src={NextSectionImage} alt="Next Section" className={NextSectionStyles.chevronImage} />
  </div>
)

export default NextSection
