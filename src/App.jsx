import "./App.css";
import { Header } from "./components/Header/Header";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Auth></Auth> */}
      <Wishlist />
    </div>
  );
}

export default App;
