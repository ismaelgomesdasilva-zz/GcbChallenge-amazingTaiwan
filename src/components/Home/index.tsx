import Image from "next/image"
import Button from "../Button"
import Carousel from "../Destinations"
import {Container, BackgroundTop} from './style'



const HomePage = () => (
    <>
    <Container>
    <div>

    <h1>Discover your next
    place to travel
    in Taiwan</h1>
    <p>Since 2020, we’ve guided more than
    100.000 people to enjoy their best<br/>
    <b>Taiwan Experience</b></p>
    <Button title='Let’s Explore'/>
    </div>
    <Image src='/homeImage.svg' width={800} height={630}></Image>
        </Container>
        
        <BackgroundTop/>
    </>

)

export default HomePage