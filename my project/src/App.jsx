
import {Route, Link, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import CryptoDetails from './components/CryptoDetails';
import Cryptocurrencies from './components/Cryptocurrencies';
import News from './components/News';


function App() {


  return (
    <div className='app'>
      <div className="navbar">
        <Navbar/>
      </div>
      
      <div className="main">
         <div className="routes">
          <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exchanges" element={ <Exchanges />} />
          <Route  path="/cryptocurrencies" element={  <Cryptocurrencies />} />
          <Route  path="/crypto/:coinId" element={   <CryptoDetails />} />
          <Route path="/news" element={  <News />} />
          </Routes>
        </div>
      </div>
    </div>

    
  )
}

export default App
