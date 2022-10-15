import './App.css';
import { Header } from './components/Header/Header';
import HeroContainer from './components/Hero/HeroContainer';
import { Header } from "./components/Header/Header";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Auth></Auth> */}
      <HeroContainer/>
      <Wishlist />
    </div>
  );
}

export default App;
