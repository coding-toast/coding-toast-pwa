import * as React from 'react'
import CardBodyStyles from './CardBody.module.scss'

const CardBody: React.FC = ({ children }) => <article className={CardBodyStyles.card}>{children}</article>

export default CardBody
