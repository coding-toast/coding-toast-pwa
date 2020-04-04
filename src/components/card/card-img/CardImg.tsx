interface ICardImgProps {
  imgUrl: string
}

const CardImg: React.FC<ICardImgProps> = props => <img src={props.imgUrl} />

export default CardImg
