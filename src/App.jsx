import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Components
import Header from "./components/header/Header";
import Footer from "./components/Footer";

// Pages
import MainPage from "./pages/Main-Page";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

// Portfolio Pages (Inside the portfolio folder)
import Portraits from "./pages/portfolio/Portraits";
import Family from "./pages/portfolio/Family";
import Maternity from "./pages/portfolio/Maternity";
// import Commercial from "./pages/portfolio/Commercial";

function App() {
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />

      <main className="flex grow">
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={<MainPage />} />

          {/* Portfolio Sub-routes */}
          <Route path="/portfolio/portrait" element={<Portraits />} />
          <Route path="/portfolio/family" element={<Family />} />
          <Route path="/portfolio/maternity" element={<Maternity />} />
          {/* <Route path="/portfolio/commercial" element={<Commercial />} /> */}

          {/* Navigation Pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* If you create a ClientsAlbums.jsx in pages, uncomment this: */}
          {/* <Route path="/clients" element={<ClientsAlbums />} /> */}

          {/* Catch-all Redirect */}
          <Route path="*" element={<MainPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
