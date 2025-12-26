import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import MainPage from "./pages/Main-Page";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        {/* Fixed typo from /cliens to /clients */}
        <Route path="/clients" element={<h2>Clients Albums </h2>} />
        <Route path="/contact" element={<h2>Contact </h2>} />

        {/* Portfolio routes */}
        <Route path="/portfolio/portrait" element={<h2>Portrait </h2>} />
        <Route path="/portfolio/family" element={<h2>Family </h2>} />
        <Route path="/portfolio/maternity" element={<h2>Maternity </h2>} />
        <Route path="/portfolio/commercial" element={<h2>Commercial </h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
