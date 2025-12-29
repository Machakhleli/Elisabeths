import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/Main-Page";
import Portraits from "./pages/portfolio/Portraits";
import Family from "./pages/portfolio/Family";
import Contact from "./pages/Contact";
// Import other pages as you create them

function App() {
  const location = useLocation();

  // Scroll to top on every route change (essential for photography sites)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-white selection:text-black">
      {/* The Header is 'absolute', so it starts at (0,0). 
        The Routes/MainPage also start at (0,0).
        This creates the overlap effect you need.
      */}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio/portrait" element={<Portraits />} />
          <Route path="/portfolio/family" element={<Family />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback for missing routes */}
          <Route path="*" element={<MainPage />} />
        </Routes>
      </main>

      {/* Footer will naturally appear at the bottom of the document flow */}
      <Footer />
    </div>
  );
}

export default App;
