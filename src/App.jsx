import "./App.css";
import Header from "./components/Header/Header";
import HeroContainer from "./components/Hero/HeroContainer";
import Wishlist from "./components/Wishlist/Wishlist";
import CarouselContainer from "./components/Carousel/CarouselContainer";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <HeroContainer/>
      <Wishlist/>
      <CarouselContainer/>
      <About/>
      <Footer/> */}
      <Sidebar />
    </div>
  );
}

export default App;
