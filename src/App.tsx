import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css"; 
import "primeicons/primeicons.css"; 
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import ContactUs from './Pages/ContactUs';
import Service from './Pages/Service';
import About from './Pages/About';
import Products from './Pages/Products';
import Offer from "./Pages/Offer";
import "./App.css";
import SubProductsDetails from './Pages/SubProductsDetails';
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
        <Route path='/subproductsdetails/:id' element={<SubProductsDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
