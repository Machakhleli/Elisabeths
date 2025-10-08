import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import ClientsAlbum from "./pages/ClientsAlbums";

//Portfolio sub-pages

export default function App() {
  return (
    <>
      <Header />;
      <Routes>
        {/* main pages */}
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/clients-albums" element={<ClientsAlbum />} />
        <Route path="/services" elements={<Services />} />

        {/* nester prtfolio routes */}

        <Route path="/portfolio" element={<Portfolio />}>
          <Route path="/family" element={<PortfolioFamily />} />
          <Route path="/commercial" element={<PortfolioCommercial />} />
          <Route path="/maternity" elment={<PortfolioMaternity />} />
          <Route path="/portraits" element={<PortfolioPortraits />} />
        </Route>
      </Routes>
    </>
  );
}
