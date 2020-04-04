interface ICardTitleProps {
  title: string
}

const CardTitle: React.FC<ICardTitleProps> = ICardTitleProps => <h2>{ICardTitleProps.title}</h2>

export default CardTitle
