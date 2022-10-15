import './App.css';
import About from './components/About/About';
import CarouselContainer from './components/Carousel/CarouselContainer';
import { Header } from './components/Header/Header';
import Auth from './components/Login';

function App() {
  return (
    <div className="App">
      <CarouselContainer/>
      {/* <Auth></Auth> */}
      <About/>
    </div>
  );
}

export default App;
