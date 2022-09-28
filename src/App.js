import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/AboutSection/About";
import GamePlay from "./components/GamePlay/GamePlay";
import Tokonomic from "./components/Tokenomic";
import Roadmap from "./components/Roadmap/Roadmap";
import Footer from "./components/Footer/Footer";
// import Partner from "./components/Part/Partner";



function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <GamePlay/>
    <Tokonomic/>
    <Roadmap/>
    {/* <Partner/> */}
 
    <Footer/>
    
    </>
  );
}

export default App;
