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
import "./FrameComponent11.css";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <section className={`header-container ${className}`}>
      <header className="header8">
        <div className="header9">
          <div className="logo-parent1">
            <div className="logo5">
              <div className="frame-parent6">
                <div className="vector-wrapper">
                  <img
                    className="vector-icon1"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="gift-euphoria5">Gift Euphoria</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-parent7">
                <div className="frame-wrapper1">
                  <TextField
                    className="uae-wrapper"
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
                <div className="business-links">
                  <a
                    className="link-buy10"
                    href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-1463"
                    target="_blank"
                  >
                    Buy eGift Cards
                  </a>
                </div>
                <div className="business-links1">
                  <div className="link-start3">Start a Group Gift</div>
                </div>
                <div className="link58">
                  <div className="for-business3">For Business</div>
                  <img className="icon14" alt="" src="/icon1.svg" />
                </div>
                <div className="business-links2">
                  <div className="link-buy11">Buy in Store</div>
                </div>
              </div>
            </div>
            <div className="help-login-icons">
              <div className="link-container">
                <div className="link59">
                  <div className="helpline-group">
                    <div className="helpline3">Helpline</div>
                    <img
                      className="help-center-iconsvg3"
                      loading="lazy"
                      alt=""
                      src="/helpcentericonsvg@2x.png"
                    />
                  </div>
                </div>
                <div className="link60">
                  <div className="login-signup-parent1">
                    <div className="login-signup3">Login / Signup</div>
                    <img
                      className="user-login-iconsvg3"
                      loading="lazy"
                      alt=""
                      src="/userloginiconsvg@2x.png"
                    />
                  </div>
                </div>
                <div className="link61">
                  <div className="cart-parent1">
                    <div className="cart3">Cart</div>
                    <img
                      className="header-cart-iconsvg3"
                      loading="lazy"
                      alt=""
                      src="/headercarticonsvg@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="group-div">
        <div className="details-header-parent">
          <div className="details-header">
            <h1 className="checkout">Checkout</h1>
          </div>
          <div className="view-or-edit1">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
