import logo from "./logo.svg";
import "./css/App.css";
import HeaderLayout from "./layouts/HeaderLayout";
import PackagesPage from "./pages/PackagesPage";
import FloatingNav from "./layouts/FloatingNav";

function App() {
  return (
    <>
      <HeaderLayout />
      {/* <FloatingNav /> */}
      <PackagesPage />
    </>
  );
}

export default App;
