import "./App.css";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";


import "./assets/js/script";
import Mark from "./Marquee/Mark";




function App(){

  return (
    <div className="App">

      <Header />
      {/* <About/> */}
      <Services />
      <Mark />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
