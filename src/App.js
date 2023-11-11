import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import InventoryDisplay from "./pages/InventoryDisplay";
import RegistrationPage from "./pages/RegistrationPage";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import ComplaintRegistration from "./pages/ComplaintRegistration";

// test pages
import InventoryRegistration from "./pages/InventoryRegistration";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/Registraion" element={<RegistrationPage />}></Route>
      <Route path="/InventoryDisplay" element={<AdminPage />}></Route>
    </Routes>
  );
}

export default App;
