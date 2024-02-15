import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-content">
      <div className="navbar-mobile-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <button className="log-out-mobile-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-icon"
          />
        </button>
      </div>
      <div className="navbar-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <ul className="nav-item">
          <li className="nav-option">Home</li>
          <li className="nav-option">Products</li>
          <li className="nav-option">Cart</li>
        </ul>
        <button type="button" className="log-out-btn">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-item-mobile">
      <ul className="nav-list-mobile">
        <li className="navbar-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="navbar-icon"
          />
        </li>
        <li className="navbar-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="navbar-icon"
          />
        </li>
        <li className="navbar-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt=" nav cart"
            className="navbar-icon"
          />
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
