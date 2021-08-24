import { useHistory } from "react-router-dom";
import routes from "../../utils/routes";
import "../../theme/global-styles.css";

const RegisterPage = () => {
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
                class="form-control"
                placeholder="Name"
                required
              />
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                required
              />
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                required
                autofocus
              />
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                required
              />
              <input
                type="password"
                class="form-control"
                placeholder="Confirm password"
                required
              />
              <div class="button-wrapper">
                <button class="btn btn-primary btn-block" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default RegisterPage;
