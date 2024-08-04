import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<div>Go to /home or /login</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

const AppWithRouterAccess = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouterAccess;
