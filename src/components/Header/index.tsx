import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const Header = () => (
  <header>
    <Image src="/logoImage.svg" width={150} height={56} />
    <nav>
      <Link href="/">Home</Link>
      <Link href="/">Explore</Link>
      <Link href="/">About</Link>
      <Button title="Sing In" />
    </nav>
  </header>
);
export default Header;
