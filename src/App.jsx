import "./App.css";
import AboutMe from "./pages/AboutMe/AboutMe";
import Banner from "./pages/Banner/Banner";
import Resume from "./pages/Resume/Resume";
import Services from "./pages/Services/Services";
import Navbar from "./pages/shared/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Banner></Banner>
        <AboutMe></AboutMe>
        <Resume></Resume>
        <Services></Services>
      </div>
    </>
  );
}

export default App;
