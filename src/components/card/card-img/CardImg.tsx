interface ICardImgProps {
  imgUrl: string
}
const CardImg: React.FC<ICardImgProps> = ICardImgProps => <img src={ICardImgProps.imgUrl} />

export default CardImg
