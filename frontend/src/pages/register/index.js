import { useHistory } from "react-router-dom";
import routes from "../../utils/routes";
import { register } from "../../api/auth";
import "../../theme/global-styles.css";
import { useState } from "react";

const RegisterPage = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onSubmit = (e) => {
    const registrationCallback = () => history.push(routes.products);

    e.preventDefault();
    const payload = {
      name,
      email,
      password,
      username,
    };
    register(payload, registrationCallback);
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
                placeholder="Name"
                value={name}
                onChange={(val) => setName(val.target.value)}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(val) => setEmail(val.target.value)}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(val) => setUsername(val.target.value)}
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(val) => setPassword(val.target.value)}
                required
              />
              <div className="button-wrapper">
                <button className="btn btn-primary btn-block" type="submit" onClick={onSubmit}>
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
