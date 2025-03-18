import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { ProductDetail } from './components/ProductDetail';
import { ProductList } from './components/ProductList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/productdetail/1001" element={<ProductList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
