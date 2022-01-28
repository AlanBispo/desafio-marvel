import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AllShop from './pages/AllShop';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/allshop" element={<AllShop />} />
      </Routes>
    </Router>
  );
}

export default App;
