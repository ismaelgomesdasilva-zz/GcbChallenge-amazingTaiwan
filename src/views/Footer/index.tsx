import Image from "next/image";
import { Container,BackgroundWaves, ImagesFooter, Social, TableOrganization,ContainerOrganization } from "./styles";

const Footer = () => {
  return (
    
  <>
      <BackgroundWaves>
    <Container>
      <ContainerOrganization>

      <ImagesFooter>
        <div>
          <Image src="/logoSecundary.svg" width={192} height={73} />
        </div>
        <Social>
          <Image src="/facebook.svg" width={28} height={28} />
          <Image src="/instagram.svg" width={28} height={28} />

          <Image src="/twitter.svg" width={28} height={28} />
        </Social>
      </ImagesFooter>
      <div>
        <h3>Menu</h3>
        <TableOrganization>
          <a>Home</a>
          <a>About</a>
          <a>Destination</a>

          <a>Reviews</a>

          <a>Community</a>
        </TableOrganization>
      </div>
      <div>
        <h3>Company</h3>
        <TableOrganization>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
          <a>Careers</a>

        </TableOrganization>
      </div>

      <div>
        <h3>Support</h3>
        <TableOrganization>
          <a>Contact Us</a>
          <a>FAQ/Help</a>

          <a>Resources</a>

        </TableOrganization>
      </div>

      <div>
        <h3>Contact Us</h3>
        <TableOrganization>
          <a>0912345678</a>
          <a>support@amazingTalwan.com</a>
        </TableOrganization>
      </div>
      </ContainerOrganization>
    </Container>
        </BackgroundWaves>
  </>
      
  );
};
export default Footer;
