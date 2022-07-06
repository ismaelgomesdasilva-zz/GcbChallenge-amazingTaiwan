
import About from "../views/About";
import Destination from "../views/Destinations";
import Header from "../components/Header";
import HomePage from "../views/Home";
import Feedback from "../views/Feedback";
import Subscribe from "../views/Subscribe";



export default function Home() {
  return (
    <>
    
    <Header/>
    <HomePage/>
    <Destination/>
    <About/>
    <Feedback/>
    <Subscribe/>
    </>
  )
}
