import { Header, Headeresponsive } from "../components";
import { About, Destination, Feedback, Footer, HomePage, Subscribe } from "../views";

export default function Home() {
  return (
    <>
      <Headeresponsive />
      <Header />
      <HomePage />
      <Destination />
      <About />
      <Feedback />
      <Subscribe />
      <Footer />
    </>
  );
}
