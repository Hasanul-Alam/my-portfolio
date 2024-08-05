import "./App.css";
import AboutMe from "./pages/AboutMe/AboutMe";
import Banner from "./pages/Banner/Banner";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Services from "./pages/Services/Services";
import Navbar from "./pages/shared/Navbar/Navbar";
import Testimonial from "./pages/Testimonial/Testimonial";

function App() {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Banner></Banner>
        <AboutMe></AboutMe>
        <Resume></Resume>
        <Services></Services>
        <Portfolio></Portfolio>
        <Testimonial></Testimonial>
      </div>
    </>
  );
}

export default App;
