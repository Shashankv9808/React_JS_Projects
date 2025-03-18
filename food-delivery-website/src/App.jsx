import { Link, NavLink, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Offers } from './components/Offers';
import { RestaurantsDetail } from './components/RestaurantsDetail';
import { TrackOrder } from './components/TrackOrder';
import { AuthPopup } from './components/AuthPopup';;
import './App.css'

function App() {
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  return (
    <>
      <Header onLoginClick={() => setShowAuthPopup(true)} />
      {showAuthPopup && <AuthPopup onClose={() => setShowAuthPopup(false)} />}
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/Offers" element={<Offers />}></Route>
          <Route path="/Restaurants" element={<RestaurantsDetail />}></Route>
          <Route path="/TrackOrder" element={<TrackOrder />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
