import { useHistory } from "react-router-dom";
import { useState } from "react";
import routes from "../../utils/routes";
import "../../theme/global-styles.css";
import { logIn } from "../../api/auth";

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onSubmit = (e) => {
    const loginCallback = () => history.push(routes.products);

    e.preventDefault();
    const payload = {
      email,
      password,
    };
    logIn(payload, loginCallback);
  }

  return (
    <div className="auth-container">
      <div className="main-container background">
        <div className="form-wrapper">
          <div className="logo-wrapper">
            <br />
            <div className="header-logo-text">Online Store</div>
          </div>
          <div className="form-container">
            <form>
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(val) => setEmail(val.target.value)}
              />
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(val) => setPassword(val.target.value)}
                required
              />
              <div className="button-wrapper">
                <button className="btn btn-primary btn-block" type="submit" onClick={onSubmit}>
                  Sign in
                </button>
              </div>
              <div className="register-link-wrapper">
                Don't have an account?
                <span className="register-link" onClick={() => history.push(routes.register)}>Regiser</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default LoginPage;
