import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Service from './components/Services/Service';
// import {
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Navbar />
        {/* <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <Home />
        <Products />
        <Service />
        <About />
        <Contact />
      </div>
  );
}

export default App;
