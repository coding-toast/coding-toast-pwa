import * as React from 'react'
import CardBodyStyles from './CardBody.module.css'

const CardBody: React.FC = ({ children }) => <article className={CardBodyStyles.card}>{children}</article>

export default CardBody
