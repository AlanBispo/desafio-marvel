import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AllShop from './pages/AllShop';
import Cart from './pages/Cart';
import { CartProvider } from './components/CartContext'

import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/allshop" element={<AllShop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
