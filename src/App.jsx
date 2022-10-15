import './App.css';
import About from './components/About/About';
import CarouselContainer from './components/Carousel/CarouselContainer';
import { Header } from './components/Header/Header';
import HeroContainer from './components/Hero/HeroContainer';
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroContainer/>
      <CarouselContainer/>
      <About/>
      <Wishlist/>
    </div>
  );
}

export default App;
