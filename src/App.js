import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import GioiThieu from './pages/GioiThieu';
import LienHe from './pages/LienHe';
import GioHang from './pages/GioHang';
import Register from './pages/Register';
import Main from './components/Main';
import TinTuc from './pages/TinTuc'; // Thêm import

function App() {
  return (
    <BrowserRouter>
      <Header />  {/* Header displayed on all pages */}
      
      <Routes>
        <Route path="/" element={<Main />} /> {/* Main component as the homepage */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/gioi-thieu' element={<GioiThieu />} />
        <Route path='/lien-he' element={<LienHe />} />
        <Route path='/cart' element={<GioHang/>} />
        <Route path='/tin-tuc' element={<TinTuc />} /> {/* Thêm route cho Tin Tức */}
      </Routes>
      
      <Footer />  {/* Footer displayed on all pages */}
    </BrowserRouter>
  );
}

export default App;
