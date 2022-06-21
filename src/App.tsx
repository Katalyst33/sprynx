import logo from "./logo.svg";
import "./css/App.css";
import HeaderLayout from "./layouts/HeaderLayout";
import PackagesPage from "./pages/PackagesPage";
import FloatingNav from "./layouts/FloatingNav";
import { Route, Routes, useNavigate } from "react-router-dom";

import Footer from "./layouts/Footer";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <>
      <HeaderLayout />
      {/* <FloatingNav /> */}
      <PackagesPage />
      <Footer />
      <InfoPage />
    </>
  );
}

export default App;
