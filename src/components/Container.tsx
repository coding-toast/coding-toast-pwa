import * as React from 'react'
import ContainerStyles from './Container.module.scss'

interface ContainerProps {
  className: string
}

const Container: React.FC<ContainerProps> = ({ className, children }) => (
  <div className={className}>
    <section className={ContainerStyles.container}>{children}</section>
  </div>
)

export default Container
