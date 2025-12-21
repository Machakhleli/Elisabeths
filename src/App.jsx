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

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/portfolio" element={<Portfolio />}>
          <Route path="portraits" element={<Portraits />} />
          <Route path="family" element={<Family />} />
          <Route path="maternity" element={<Maternity />} />
          <Route path="commercial" element={<Commercial />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
