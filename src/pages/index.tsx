import About from "../views/About";
import Destination from "../views/Destinations";
import Header from "../components/Header";
import HomePage from "../views/Home";
import Feedback from "../views/Feedback";
import Subscribe from "../views/Subscribe";
import Footer from "../views/Footer";
import Headeresponsive from "../components/Headeresponsive";

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
