import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Slider from './Container/Slider/Slider';
import NewArrival from './Container/NewArrival/NewArrival';
import ImpulsePopularPick from './Container/ImpulsePopularPick/ImpulsePopularPick';
import AboutUs from './Container/AboutUs/AboutUs';
import ContactUs from './Container/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      {/* <Home /> */}
      <Nav />
      <Slider />
      <NewArrival />
      <ImpulsePopularPick />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
