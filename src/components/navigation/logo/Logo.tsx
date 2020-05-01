import * as React from 'react'
import LogoImage from '../../../images/logo.svg'

interface StyleProps {
  styles: CSSModule
}

const Logo: React.FC<StyleProps> = (props) => {
  const { styles } = props
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logoImage} src={LogoImage} alt="coding toast" />
    </div>
  )
}

export default Logo
