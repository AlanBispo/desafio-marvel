import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import AllShop from './Pages/AllShop';
import Cart from './Pages/Cart';
import Description from './Pages/Description';
import About from './Pages/About'

import { CartProvider } from './components/CartContext'
import { DescriptionProvider } from './components/DescriptionContext'


import './App.css';

const App = () => {
  return (
    <CartProvider>
      <DescriptionProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/allshop" element={<AllShop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/description" element={<Description />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </DescriptionProvider>
    </CartProvider>
  );
}

export default App;
