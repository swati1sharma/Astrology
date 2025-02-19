import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import ContactUs from './Pages/ContactUs';
import Service from './Pages/Service';
import About from './Pages/About';
import Products from './Pages/Products';
import Offer from "./Pages/Offer";
import "./App.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/service' element={<Service/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/offer' element={<Offer/>}/>
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
