import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Service/Services";
import Testimonial from "./pages/Testimonial/Testimonial";
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/service" element={<Services/>}/>
              <Route path="/testimonial" element={<Testimonial/>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
