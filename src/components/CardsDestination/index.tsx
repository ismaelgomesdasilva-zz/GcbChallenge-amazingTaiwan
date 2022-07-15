import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import { AlignDiv, Cards } from './styles'

type CardsDestinationProps = {
  src: string,
  width: number,
  height: number,
  title: string,
  traveling: number,
  initialValue: number,
}


const CardsDestination = ({ src, width, height, title, traveling, initialValue }: CardsDestinationProps) => (
  <AlignDiv>
    <Image layout="fixed" src={src} width={width} height={height} />
    <Cards>
      <h1>{title}</h1>
      <p>
        {traveling} Destinations
        <br />
        <Rating ratingValue={0} initialValue={initialValue} readonly={true} emptyColor="#FFFF" size={18}/>
      </p>
    </Cards>
  </AlignDiv>


)
export default CardsDestination 