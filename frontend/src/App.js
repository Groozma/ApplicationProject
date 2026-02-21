import Header from "./components/Header/Header";
import Address from "./components/Address/Address";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Programs from "./Pages/Programs/Programs";
import Nav from "./components/Nav/Nav";
import Gallery from "./Pages/Gallery/Gallery"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <hr />
      <Nav />
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Programs" element={<Programs />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>

      <hr />
      <Address />
      <hr />
      <Footer />
    </>
  );
}

export default App;
