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
    <Router basename="/Free-Redeem-code">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redeem" element={<Redeem />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={isAdminAuthenticated() ? <Admin /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;