import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Programs from "./Pages/Programs/Programs";
import Nav from "./components/Nav/Nav";
import TestimonialsPage from "./Pages/Testimonials/TestimonialsPage";
import Gallery from "./Pages/Gallery/Gallery";
import NeatStuffPage from "./Pages/NeatStuff/NeatStuffPage";


import { Routes, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <div className="line"></div> */}
      <Nav />
      <div className="line"></div>

      <Routes>
        <Route path="/ApplicationProject" element={<Home />} />
        <Route path="/ApplicationProject/Contact" element={<Contact />} />
        <Route path="/ApplicationProject/Programs" element={<Programs />} />
        <Route path="/ApplicationProject/Testimonials" element={<TestimonialsPage />} />
        <Route path="/ApplicationProject/Gallery" element={<Gallery />} />
        <Route path="/ApplicationProject/NeatStuff" element={<NeatStuffPage />} />
      </Routes>

      <div className="line"></div>
      <Footer />
    </div>
  );
}

export default App;
