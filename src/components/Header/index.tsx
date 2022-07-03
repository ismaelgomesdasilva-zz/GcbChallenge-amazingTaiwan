import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import {Container, Border} from './styles'
const Header = () => (
  <Border>
   <Container>
    <div className="logo">

    <Image src="/logoImage.svg" width={150} height={56} />
    </div>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/">Explore</Link>
      <Link href="/">About</Link>
      <Button title="Sing In" />
    </nav>
    </Container>
  </Border>
);
export default Header;
