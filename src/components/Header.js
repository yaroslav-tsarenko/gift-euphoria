import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <div className={`header ${className}`}>
      <div className="header1">
        <div className="logo-parent">
          <div className="logo">
            <div className="logo-grandparent-parent">
              <div className="logo-grandparent">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </div>
              <div className="gift-euphoria">Gift Euphoria</div>
            </div>
          </div>
          <div className="nav-links-container">
            <div className="u-a-e-icon-parent-parent">
              <div className="u-a-e-icon-parent">
                <div className="u-a-e-icon-great-grandparent-parent">
                  <div className="u-a-e-icon-great-grandparent">
                    <img
                      className="dc1c8118-8533-4bf8-a1e4-d781e9-icon"
                      alt=""
                      src="/dc1c811885334bf8a1e4d781e999f8bdpng@2x.png"
                    />
                  </div>
                  <div className="uae">UAE</div>
                  <div className="language-icon-parent">
                    <img className="icon1" alt="" src="/icon.svg" />
                  </div>
                </div>
              </div>
              <div className="nav-links-items">
                <a
                  className="link-buy"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-1463"
                  target="_blank"
                >
                  Buy eGift Cards
                </a>
              </div>
              <div className="nav-links-items1">
                <div className="link-start">Start a Group Gift</div>
              </div>
              <div className="link">
                <div className="for-business">For Business</div>
                <img className="icon2" alt="" src="/icon1.svg" />
              </div>
              <div className="nav-links-items2">
                <div className="link-buy1">Buy in Store</div>
              </div>
            </div>
          </div>
          <div className="user-links-parent">
            <div className="link-parent">
              <div className="link1">
                <div className="helpline-parent">
                  <div className="helpline">Helpline</div>
                  <img
                    className="help-center-iconsvg"
                    alt=""
                    src="/helpcentericonsvg@2x.png"
                  />
                </div>
              </div>
              <div className="link2">
                <div className="login-signup-parent">
                  <div className="login-signup">Login / Signup</div>
                  <img
                    className="user-login-iconsvg"
                    alt=""
                    src="/userloginiconsvg@2x.png"
                  />
                </div>
              </div>
              <div className="link3">
                <div className="cart-parent">
                  <div className="cart">Cart</div>
                  <img
                    className="header-cart-iconsvg"
                    alt=""
                    src="/headercarticonsvg@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
