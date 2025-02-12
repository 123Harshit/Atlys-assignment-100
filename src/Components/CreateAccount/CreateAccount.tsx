import { useNavigate } from "react-router-dom";
import "./CreateAccount.scss";

const CreateAccount: React.FC<{
  loginClicked?: () => void;
  registerClicked?: () => void;
  inPopUp: boolean
}> = ({ loginClicked, registerClicked, inPopUp }) => {
  const nav = useNavigate();
  return (
    <div className="create-account-main-container">
      <div className="create-account-container">
        <p className="welcome-text">SIGN UP</p>
        <h3 className="create-account-text">Create an account to continue</h3>
        <div className="input-container">
          <div className="email-input-container">
            <p className="email-label">Email</p>
            <input
              type="text"
              className="box-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="email-input-container">
            <p className="email-label">Username</p>
            <input
              type="text"
              className="box-input"
              placeholder="Choose a preferred username"
            />
          </div>
          <div className="password-input-container">
            <span className="password-label">
              <p className="password-label-2">Password</p>
              <p className="forgot-password">Forgot Password?</p>
            </span>
            <input
              type="password"
              placeholder="Choose a strong Password"
              className="box-input"
            />
          </div>
        </div>
        <button
          className="create-account-button"
          onClick={() => {
            inPopUp ? registerClicked && registerClicked() : nav("/home");
          }}
        >
          Continue
        </button>
        <div className="not-registered">
          <p className="not-registered-text">Already have an account?</p>
          <p onClick={() => inPopUp ? loginClicked && loginClicked() : nav("/home")} className="register-nav">
            {" Login ->"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
