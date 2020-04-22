import * as React from 'react'
import { observer } from 'mobx-react-lite'
import { RefStoreContext } from '../../stores/RefStore'
import NextSectionImage from '../../images/next-section.png'
import NextSectionStyles from './NextSection.module.scss'

const NextSection: React.FC = observer(() => {
  const refStore = React.useContext(RefStoreContext)
  const executeScroll = () => {
    window.scrollTo({
      top: refStore.ref.current?.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <div role="button" onClick={executeScroll} onKeyPress={executeScroll} tabIndex={-1} className="nextSectionButton">
      <img src={NextSectionImage} alt="Next Section" className={NextSectionStyles.chevronImage} />
    </div>
  )
})

export default NextSection
