import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AllShop from './pages/AllShop';
import Cart from './pages/Cart';
import Description from './pages/Description';
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
          </Routes>
        </Router>
      </DescriptionProvider>
    </CartProvider>
  );
}

export default App;
