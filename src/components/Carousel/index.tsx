
import Carousel from 'nuka-carousel';
import styled from 'styled-components';
import Image from 'next/image';
export const Container = styled.div`
  width: 50%;
  height: 408px;
  background-color: aliceblue;
  ` 
  export const ButtonPrev = styled.button`
    background-color: black;
    position: relative;
    bottom: -200px;
  `
  export const Balls = styled.div`
  position: relative;
  `
export function Carouseel(){
  return(
    <Container>

    <Carousel
  renderTopCenterControls={({ currentSlide }) => (
    <Balls>Slide: {currentSlide}</Balls>
    )}
    renderCenterLeftControls={({ previousSlide }) => (
      <button onClick={previousSlide}>Previous</button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <ButtonPrev onClick={nextSlide}>Next</ButtonPrev>
        )}
>
<div>
<Image layout="fixed" src="/towerCity.png" width={277} height={408} />

      
  </div>
  <div>
  <Image layout="fixed" src="/towerCity.png" width={277} height={408} />

  </div>
  <div>
<Image layout="fixed" src="/towerCity.png" width={277} height={408} />

      
  </div>
  <div>
  <Image layout="fixed" src="/towerCity.png" width={277} height={408} />

  </div>
  <div>
<Image layout="fixed" src="/towerCity.png" width={277} height={408} />

      
  </div>
  <div>
  <Image layout="fixed" src="/towerCity.png" width={277} height={408} />

  </div>

</Carousel>
  </Container>
  )
}