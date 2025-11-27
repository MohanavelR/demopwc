import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FloatingActions from "./components/FloatingActions";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Technical from "./pages/Technical";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ManuFacBangalore from "./pages/manufacturers/ManuFacBangalore";
import ManuFacHyderabad from "./pages/manufacturers/ManuFacHyderabad";
import ManuFacCoimbatore from "./pages/manufacturers/ManuFacCoimbatore";
import ManuFacChennai from "./pages/manufacturers/ManuFacChennai";
import ManuFacIndia from "./pages/manufacturers/ManuFacIndia";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/technical/*" element={<Technical />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/manufacturers-in-bangalore" element={<ManuFacBangalore />} />
           <Route path="/manufacturers-in-hyderabad" element={< ManuFacHyderabad />} />
           <Route path="/manufacturers-in-coimbatore" element={< ManuFacCoimbatore />} />
             <Route path="/manufacturers-in-chennai" element={< ManuFacChennai />} />
             <Route path="/manufacturers-in-india" element={< ManuFacIndia />} />
        </Routes>
        <FloatingActions />
      </BrowserRouter>
    </div>
  );
}

export default App;
