interface ICardMetaProps {
  publishDate: string
}

const CardMeta: React.FC<ICardMetaProps> = props => <p>{props.publishDate}</p>

export default CardMeta
