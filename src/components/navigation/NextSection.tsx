import * as React from 'react'
import { observer } from 'mobx-react-lite'
import { NextSectionStoreContext } from '../../stores/NextSectionStore'
import NextSectionImage from '../../images/next-section.png'
import NextSectionStyles from './NextSection.module.scss'

const NextSection: React.FC = observer(() => {
  const nextSectionStore = React.useContext(NextSectionStoreContext)
  const executeScroll = () => {
    window.scrollTo({
      top: nextSectionStore.ref.current?.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <button type="button" onClick={executeScroll} onKeyPress={executeScroll} tabIndex={-1} className={NextSectionStyles.chevronButton}>
      <img src={NextSectionImage} alt="Next Section" />
    </button>
  )
})

export default NextSection
