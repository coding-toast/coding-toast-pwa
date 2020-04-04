interface ICardDescriptionProps {
  text: string
}

const CardDesctiption: React.FC<ICardDescriptionProps> = props => (
  <div>
    <p>{props.text}</p>
  </div>
)

export default CardDesctiption
