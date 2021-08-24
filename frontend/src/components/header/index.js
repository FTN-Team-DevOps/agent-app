import { useHistory } from "react-router-dom";
import routes from "../../utils/routes";
import "./style.css";

const Header = () => {
  const history = useHistory();

  return (
    <div>
      <div className="header">
        <div className="header-logo-wrapper">
          <br />
          <div className="header-logo-text">Online Store</div>
        </div>
      </div>
      <div className="tabs-container">
        <button className="button tab" onClick={() => history.push(routes.products)}>Store</button>
        <button className="button tab" onClick={() => history.push(routes.productsEdit)}>My Products</button>
        <button className="button tab" onClick={() => history.push(routes.purchases)}>My Purchases</button>
        <button className="button tab" onClick={() => history.push(routes.login)}>Log Out</button>
      </div>
    </div>
  )
};

export default Header;
