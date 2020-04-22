import * as React from 'react'
import NextSectionImage from '../../images/next-section.png'
import NextSectionStyles from './NextSection.module.scss'
import { observer } from 'mobx-react-lite'
import { RefStoreContext } from '../../stores/RefStore'

const NextSection: React.FC = observer(() => {
  const refStore = React.useContext(RefStoreContext)

  return (
    <div>
      <img
        src={NextSectionImage}
        alt="Next Section"
        className={NextSectionStyles.chevronImage}
        onClick={
          () => {
            // if (refStore.ref.current) {
            window.scrollTo({
              top: refStore.ref.current.offsetTop,
              behavior: 'smooth'
            })
          }
          // }
        }
      />
    </div>
  )
})

export default NextSection
