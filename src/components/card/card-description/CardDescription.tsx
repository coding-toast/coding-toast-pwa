interface ICardDescriptionProps {
  text: string
}

const CardDesctiption: React.FC<ICardDescriptionProps> = ICardDescriptionProps => (
  <div>
    <p>{ICardDescriptionProps.text}</p>
  </div>
)

export default CardDesctiption
