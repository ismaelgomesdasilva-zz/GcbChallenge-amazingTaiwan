import Image from 'next/image'
import {AlignDiv, Cards} from './styles'




const CardsDestination = () => (
  <AlignDiv>
    <Image layout="fixed" src="/towerCity.png" width={277} height={408} />
      <Cards>
        <h1>Taipei</h1>
        <p>
          56 Destinations
          <br />
          <Image
            layout="fixed"
            src="/Vector.svg"
            width={20}
            height={20}
          ></Image>
          <Image
            layout="fixed"
            src="/Vector.svg"
            width={20}
            height={20}
          ></Image>
          <Image
            layout="fixed"
            src="/Vector.svg"
            width={20}
            height={20}
          ></Image>
          <Image
            layout="fixed"
            src="/Vector.svg"
            width={20}
            height={20}
          ></Image>
          <Image
            layout="fixed"
            src="/Vector.svg"
            width={20}
            height={20}
          ></Image>
        </p>
      </Cards>
  </AlignDiv>

  
)
export default CardsDestination 