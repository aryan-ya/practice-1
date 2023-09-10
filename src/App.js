import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";

import Services from "./components/Services";
import Contact from "./components/Contact"
import "./styles/header.scss";
import "./styles/App.scss";



function App() {
  return (
 <Router>
  <Header />
  <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
  </Routes>
 </Router>
  
  );
}

export default App;
