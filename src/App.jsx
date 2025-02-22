import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Redeem from "./pages/Redeem";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const isAdminAuthenticated = () => {
    return localStorage.getItem("admin") === "true";
  };

  return (
    <Router>
      <Routes>
        <Route path="https://freeredeemcard.github.io/Free-Redeem-code/" element={<Home />} />
        <Route path="https://freeredeemcard.github.io/Free-Redeem-code/redeem" element={<Redeem />} />
        <Route path="https://freeredeemcard.github.io/Free-Redeem-code/login" element={<Login />} />
        <Route
          path="https://freeredeemcard.github.io/Free-Redeem-code/admin"
          element={isAdminAuthenticated() ? <Admin /> : <Navigate to="https://freeredeemcard.github.io/Free-Redeem-code/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;