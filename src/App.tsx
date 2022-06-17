import logo from "./logo.svg";
import "./css/App.css";
import HeaderLayout from "./layouts/HeaderLayout";
import PackagesPage from "./pages/PackagesPage";
import FloatingNav from "./layouts/FloatingNav";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <HeaderLayout />
      {/* <FloatingNav /> */}
      <PackagesPage />
      <Footer />
    </>
  );
}

export default App;
