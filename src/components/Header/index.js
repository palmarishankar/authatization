import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
    </div>

    <ul className="link-items">
      <Link to="/">
        <li className="list-item">Home</li>
      </Link>
      <Link to="/product">
        <li className="list-item">Product</li>
      </Link>
      <Link to="/cart">
        <li className="list-item">Cart</li>
      </Link>
    </ul>
    <button type="button">LogOut</button>
  </div>
)

export default Header
