import "./style.css";

const Header = () => (
  <div>
    <div className="header">
      <div className="header-logo-wrapper">
        <br />
        <div className="header-logo-text">Online Store</div>
      </div>
    </div>
    <div className="tabs-container">
      <button className="button tab">Store</button>
      <button className="button tab">My Products</button>
      <button className="button tab">My Purchases</button>
      <button className="button tab">Log Out</button>
    </div>
  </div>
);

export default Header;
