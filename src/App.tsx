import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import CreateAccount from "./Components/CreateAccount/CreateAccount";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={<div>Go to /home or /login or /register</div>}
        />
        <Route path="/login" element={<Login inPopUp={false} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<CreateAccount inPopUp={false} />} />
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
