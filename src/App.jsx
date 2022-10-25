import "./App.css";
import { Header } from "./components/Header/Header";
import HeroContainer from "./components/Hero/HeroContainer";
import Wishlist from "./components/Wishlist/Wishlist";
import CarouselContainer from './components/Carousel/CarouselContainer';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroContainer/>
      <Wishlist/>
      <CarouselContainer/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
