import { CaretLeft, CaretRight, Circle } from 'phosphor-react'
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import * as S from './styles'

interface StateCaroselParams {
  widthCarousel?: number
  widthChildrens?: number
  qntChildrens?: number
  qntBalls?: number[]
  maxWidthCarousel?: number
}

interface CarouselParams {
  children: React.ReactNode
  maxWidth?: number
  height?: number
}

const Carousel = ({ children, maxWidth, height }: CarouselParams) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [stateCarousel, setStateCarousel] = useState<StateCaroselParams>()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleCarousel = useCallback(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current

      const balls = Math.round(carousel.children.length / 4)

      setStateCarousel({
        ...stateCarousel,
        widthCarousel: carousel.clientWidth,
        qntBalls: new Array(balls).fill(0),
        widthChildrens: carousel.children.item(0)?.clientWidth,
        maxWidthCarousel:
          (carousel.children.length - 1) * carousel.children.item(0)?.clientWidth!
      })
    }
  }, [setStateCarousel])

  const handleCarouselAction = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    switch (e.currentTarget.id) {
      case 'next':
        if (currentIndex < stateCarousel?.qntBalls?.length! - 1) {
          setCurrentIndex(currentIndex + 1)
        }
        return (carouselRef.current!.scrollLeft += carouselRef.current!.offsetWidth)

      case 'prev':
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1)
        }
        return (carouselRef.current!.scrollLeft -= carouselRef.current!.offsetWidth)

      default:
        return null
    }
  }

  useEffect(() => {
    handleCarousel()
  }, [handleCarousel])

  return (
    <S.ContainerRelative max={maxWidth || stateCarousel?.maxWidthCarousel}>
      <S.Container ref={carouselRef} height={height}>
        {children}
        <div className='buttons'>
          <button onClick={handleCarouselAction} id='prev' className='prev'>
            <CaretLeft size={32} color='white' />
          </button>
          <S.BallsContainer>
            {stateCarousel?.qntBalls!.map((item, index) => (
              <S.Balls key={item} active={currentIndex === index}>
                <Circle size={20} weight='fill' />
              </S.Balls>
            ))}
          </S.BallsContainer>
          <button onClick={handleCarouselAction} id='next' className='next'>
            <CaretRight size={32} color='white' />
          </button>
        </div>
      </S.Container>
    </S.ContainerRelative>
  )
}

export default Carousel
