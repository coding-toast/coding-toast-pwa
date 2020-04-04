interface ICardMetaProps {
  publishDate: string
}

const CardMeta: React.FC<ICardMetaProps> = ICardMetaProps => <p>{ICardMetaProps.publishDate}</p>

export default CardMeta
