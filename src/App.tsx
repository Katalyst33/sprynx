import logo from "./logo.svg";
import "./css/App.css";
import HeaderLayout from "./layouts/HeaderLayout";
import PackagesPage from "./pages/PackagesPage";

function App() {
  return (
    <>
      <HeaderLayout />

      <PackagesPage />
    </>
  );
}

export default App;
