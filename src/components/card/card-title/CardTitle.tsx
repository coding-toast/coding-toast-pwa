interface ICardTitleProps {
  title: string
}

const CardTitle: React.FC<ICardTitleProps> = props => <h2>{props.title}</h2>

export default CardTitle
