<<<<<<< HEAD
// import { useState } from "react";
// import Header from "./components/header/Header";
// import MainPage from "./components/Main-Page";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Header />
//       <MainPage />
//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

import Portfolio from "./pages/Portfolio/Portfolio";
import Portraits from "./pages/Portfolio/Portraits";
import Family from "./pages/Portfolio/Family";
import Maternity from "./pages/Portfolio/Maternity";
import Commercial from "./pages/Portfolio/Commercial";
=======
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/Main-Page";
import Footer from "./components/Footer";
import Services from "./pages/Services";
>>>>>>> 63510d7c254c9e2f7f90bb28f44eb3bec3d484b7

function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD

      <Routes>
        <Route path="/portfolio" element={<Portfolio />}>
          <Route path="portraits" element={<Portraits />} />
          <Route path="family" element={<Family />} />
          <Route path="maternity" element={<Maternity />} />
          <Route path="commercial" element={<Commercial />} />
        </Route>
      </Routes>
=======
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
>>>>>>> 63510d7c254c9e2f7f90bb28f44eb3bec3d484b7
    </>
  );
}

export default App;
