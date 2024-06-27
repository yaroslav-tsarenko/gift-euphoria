import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Page.css";

const Page = ({ className = "" }) => {
  return (
    <section className={`page ${className}`}>
      <header className="header4">
        <div className="header5">
          <nav className="frame-nav">
            <div className="logo3">
              <div className="gift-euphoria-logo">
                <div className="brand-name">
                  <img
                    className="brand-icon"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="gift-euphoria3">Gift Euphoria</div>
              </div>
            </div>
            <div className="gift-option-links">
              <div className="business-link">
                <div className="user-options">
                  <TextField
                    className="help-login-cart"
                    variant="standard"
                    select
                    value={1}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{ marginRight: "5px" }}
                        >
                          <img
                            width="15px"
                            height="12px"
                            src="/dc1c811885334bf8a1e4d781e999f8bdpng.png"
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <img width="10px" height="6px" src="/icon.svg" />
                      ),
                    }}
                    SelectProps={{ IconComponent: () => null }}
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "69px",
                      height: "16px",
                      "& .MuiInput-underline:before": { borderBottom: "none" },
                      "& .MuiInput-underline:after": { borderBottom: "none" },
                      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottom: "none",
                      },
                      "& .MuiInputBase-root": { height: "100%" },
                      "& .MuiInputBase-input": {
                        color: "#3a1a5f",
                        fontSize: 16,
                        fontWeight: "Regular",
                        fontFamily: "Roboto",
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <MenuItem value={1}>UAE</MenuItem>
                  </TextField>
                </div>
                <div className="business-info">
                  <a
                    className="link-buy6"
                    href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-1463"
                    target="_blank"
                  >
                    Buy eGift Cards
                  </a>
                </div>
                <div className="business-info1">
                  <div className="link-start2">Start a Group Gift</div>
                </div>
                <div className="link44">
                  <div className="for-business2">For Business</div>
                  <img
                    className="icon13"
                    loading="lazy"
                    alt=""
                    src="/icon1.svg"
                  />
                </div>
                <div className="business-info2">
                  <div className="link-buy7">Buy in Store</div>
                </div>
              </div>
            </div>
            <div className="help-center">
              <div className="user-login">
                <div className="link45">
                  <div className="option-names">
                    <div className="helpline2">Helpline</div>
                    <img
                      className="help-center-iconsvg2"
                      loading="lazy"
                      alt=""
                      src="/helpcentericonsvg@2x.png"
                    />
                  </div>
                </div>
                <div className="link46">
                  <div className="login-signup-container">
                    <div className="login-signup2">Login / Signup</div>
                    <img
                      className="user-login-iconsvg2"
                      loading="lazy"
                      alt=""
                      src="/userloginiconsvg@2x.png"
                    />
                  </div>
                </div>
                <div className="link47">
                  <div className="cart-container">
                    <div className="cart2">Cart</div>
                    <img
                      className="header-cart-iconsvg2"
                      loading="lazy"
                      alt=""
                      src="/headercarticonsvg@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="hourly-rate-wrapper">
        <div className="hourly-rate">
          <div className="cart-name">
            <h1 className="your-cart">Your Cart</h1>
          </div>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};

export default Page;
