import { useHistory } from "react-router-dom";
import routes from "../../utils/routes";
import "../../theme/global-styles.css";

const LoginPage = () => {
  const history = useHistory();
  return (
    <div class="auth-container">
      <div class="main-container background">
        <div class="form-wrapper">
          <div class="logo-wrapper">
            <br />
            <div class="header-logo-text">Online Store</div>
          </div>
          <div class="form-container">
            <form>
              <input
                type="text"
                id="username"
                class="form-control"
                name="username"
                placeholder="Username"
                required
                autofocus
              />
              <input
                type="password"
                id="password"
                class="form-control"
                name="password"
                placeholder="Password"
                required
              />
              <div class="button-wrapper">
                <button class="btn btn-primary btn-block" type="submit">
                  Sign in
                </button>
              </div>
              <div class="register-link-wrapper">
                Don't have an account?
                <span class="register-link" onClick={() => history.push(routes.register)}>Regiser</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default LoginPage;
