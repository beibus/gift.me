import "./App.css";
import Header from "./components/Header/Header";
import HeroContainer from "./components/Hero/HeroContainer";
import Wishlist from "./components/Wishlist/Wishlist";
import CarouselContainer from "./components/Carousel/CarouselContainer";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/MyPages/Profile";
import MyWishlist from "./components/MyPages/MyWishlist";
import Favorites from "./components/MyPages/Favorites";
import Friends from "./components/MyPages/Friends";

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
