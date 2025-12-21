import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/Main-Page";
import Footer from "./components/Footer";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<h2>About </h2>} />
        <Route path="/cliens" element={<h2>Clients Albums </h2>} />
        <Route path="/contact" element={<h2>Contact </h2>} />
        {/* portfolio routes */}
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
