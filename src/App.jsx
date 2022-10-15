import './App.css';
import { Header } from './components/Header/Header';
import HeroContainer from './components/Hero/HeroContainer';
import Auth from './components/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroContainer/>
      {/* <Auth></Auth> */}
    </div>
  );
}

export default App;
