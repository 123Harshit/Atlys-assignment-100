import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login: React.FC<{ registerClicked?: () => void, inPopUp: boolean, loginClicked?: () => void }> = ({registerClicked, inPopUp, loginClicked}) => {
    const navigate = useNavigate();
  return (
    <div className="login-main-container">
      <div className="login-container">
        <p className="welcome-text">WELCOME BACK</p>
        <h3 className="login-text">Log into your account</h3>
        <div className="input-container">
          <div className="email-input-container">
            <p className="email-label">Email or Username</p>
            <input
              type="text"
              className="box-input"
              placeholder="Enter your email or username"
            />
          </div>
          <div className="password-input-container">
            <span className="password-label">
              <p className="password-label-2">Password</p>
              <p className="forgot-password">Forgot Password?</p>
            </span>
            <input
              type="password"
              placeholder="Enter your Password"
              className="box-input"
            />
          </div>
        </div>
        <button className="login-button" onClick={()=> {
            !inPopUp ? navigate("/home"): loginClicked && loginClicked()
        }}>Login now</button>
        <div className="not-registered">
          <p className="not-registered-text">Not registered yet? </p>
          <p onClick={() => inPopUp ? registerClicked && registerClicked() : navigate("/home")} className="register-nav">{" Register ->"}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
