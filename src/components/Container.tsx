import * as React from 'react'
import ContainerStyles from './Container.module.scss'

interface ContainerProps {
  className: string
}

const Container: React.FC<ContainerProps> = ({ className, children }) => (
  <section className={`${className} ${ContainerStyles.container}`}>{children}</section>
)

export default Container
