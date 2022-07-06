import Image from "next/image";
import { BackgroundBottom, AlingItens, Description, ImageLogo, Titleh1 } from "./styles";

const About = () => (
  <>
    <BackgroundBottom />
    <Titleh1>About Us</Titleh1>
    <AlingItens>

    <Description>
    <p>
      <span>Amazing Taiwan</span> is travel guidance platform, helps hundreds of thousands of
      people each month, become <strong>better travelers.</strong>
    </p>
    <p>
      Travelers across the globe use the Amazing Taiwan site to <strong>discover</strong> where
      to visit, based on guidance from those who have been there before.
    </p>
    <p>
      As a travel guidance company, Amazing Taiwan makes planning easy no matter
      the trip type.
    </p>
    </Description>

    <ImageLogo>
        <Image src='/aboutImage.svg' width={593} height={575}/>
    </ImageLogo>
    </AlingItens>
  </>
);
export default About;
