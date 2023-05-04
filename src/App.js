import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import CryptoIndex from './pages/CryptoIndex';
import { Route, Routes} from 'react-router-dom';
import Show from './pages/Show';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>My App with Cryptoprices</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cryptoIndex' element={<CryptoIndex />} />
        <Route path='/price'> 
          <Route path =':symbol' element={<Show /> } /> 
          </Route>
      </Routes>
       
    </div>
  );
}

export default App;
