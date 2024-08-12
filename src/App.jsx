import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./pages/shared/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="slide-down">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
