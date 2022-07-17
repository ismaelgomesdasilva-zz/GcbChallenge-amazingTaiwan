import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import { AlignDiv, Cards } from './styles'

export type CardsDestinationProps = {
  src?: string,
  width?: number,
  height?: number,
  title?: string,
  traveling?: number,
  starlength?: number,
}


export const CardsDestination = ({ src, width, height, title, traveling, starlength }: CardsDestinationProps) => (
  <AlignDiv>
    <Image layout="fixed" src={src} width={width} height={height} />
    <Cards>
      <h1>{title}</h1>
      <p>
        {traveling} Destinations
        <br />
        <Rating ratingValue={0} initialValue={starlength} readonly={true} emptyColor="#FFFF" size={18}/>
      </p>
    </Cards>
  </AlignDiv>


)
