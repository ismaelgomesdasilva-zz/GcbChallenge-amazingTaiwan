import Image from "next/image";
import {
  AlignContainer,
  ModalComents,
  Title,
  Descriptions,
  ImageAling,
} from "./styles";
export const Feedback = () => (
  <>
    <Title>Let’s see what other travellers say</Title>
    <AlignContainer>
      <ModalComents>
        <div>
          <Image src="/michael.png" width={66} height={66} />
        </div>
        <Descriptions>
          <h1>Taipei 101</h1>
          <ImageAling>
            <Image src="/star.svg" width={100} height={20} />
          </ImageAling>
          <p>
            What an amazing place,
            <br /> I can see 360° view of Taipei <br />
            from here.
          </p>
          <h3>Michael</h3>
        </Descriptions>
      </ModalComents>
      <ModalComents>
        <div>
          <Image src="/jiufen.png" width={66} height={66} />
        </div>
        <Descriptions>
          <h1>Jiufen Old Street</h1>
          <ImageAling>
            <Image src="/avaliation.svg" width={100} height={20} />
          </ImageAling>
          <p>
            You must visit this place, There are so many delicious food and
            beautiful landscape.
          </p>
          <h3>William</h3>
        </Descriptions>
      </ModalComents>
      <ModalComents>
        <div>
          <Image src="/Shilin.png" width={66} height={66} />
        </div>
        <Descriptions>
          <h1>TShilin Night Market</h1>
          <ImageAling>
            <Image src="/avaliation.svg" width={100} height={20} />
          </ImageAling>
          <p>This is a fun night market <br />and easy to get to. <br />It's pretty big</p>
          <h3>Mary</h3>
        </Descriptions>
      </ModalComents>
    </AlignContainer>
  </>
);

