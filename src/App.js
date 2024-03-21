import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Service/Services";
import Testimonial from "./pages/Testimonial/Testimonial";
import Navbar from './components/Navbar/Navbar';
import Bible from "./pages/Bible/Bible";
import Songs from "./pages/Songs/Songs";
import DailyVerse from "./pages/DailyVerse/DailyVerse";
import SongDetail from "./pages/Songs/SongDetail/SongDetail";

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
              <Route path="/bible" element={<Bible/>}/>
              <Route path="/verse" element={<DailyVerse/>}/>
              <Route path="/songs" element={<Songs/>}/>
              <Route path="/songs/:songId" element={<SongDetail />} /> {/* Dynamic route for individual song */}
          </Routes>
      </BrowserRouter>
  );
}

export default App;