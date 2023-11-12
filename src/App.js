import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import InventoryDisplay from "./pages/InventoryDisplay";
import RegistrationPage from "./pages/RegistrationPage";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import ComplaintRegistration from "./pages/ComplaintRegistration";
import InventoryRegistration from "./pages/InventoryRegistration";
import PendingComplaintPage from "./pages/PendingComplaintPage";
import LabInchargePage from "./pages/LabInchargePage";
import AdminPage from "./pages/AdminPage";


function App() {
  return (
    <Routes>
       <Route path="/" element={<LoginPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/Registraion" element={<RegistrationPage />}></Route>
      <Route path="/InventoryDisplay" element={<InventoryDisplay />}></Route>
      <Route path="/ComplaintRegistration" element={<ComplaintRegistration/>}></Route>
      <Route path="/InventoryRegistration" element={<InventoryRegistration/>}></Route>
      <Route path="/LabInchargePage" element={<LabInchargePage/>}></Route>
      <Route path="/PendingComplaint" element={<PendingComplaintPage/>}></Route>
      <Route path="/Admin" element={<AdminPage/>}></Route>

    </Routes>
  );
}

export default App;
