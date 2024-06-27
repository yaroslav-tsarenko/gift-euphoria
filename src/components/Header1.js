import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <header className={`header2 ${className}`}>
        <div className="header3">
          <div className="header-right">
            <div className="logo2">
              <div className="nav-wrapper">
                <div className="nav-icon-wrapper">
                  <img
                    className="nav-icon"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="gift-euphoria2">Gift Euphoria</div>
              </div>
            </div>
            <div className="user-action-links-wrapper">
              <div className="user-action-links">
                <div className="wrapper">
                  <DatePicker
                    value={frameDateTimePickerValue}
                    onChange={(newValue) => {
                      setFrameDateTimePickerValue(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#3a1a5f",
                        fontSize: 16,
                      },
                      input: {
                        color: "#3a1a5f",
                        fontSize: 16,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        height: 20.5,
                        gap: "5px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                        placeholder: "UAE",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="15px"
                            height="12px"
                            src="/dc1c811885334bf8a1e4d781e999f8bdpng.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <div className="business-link-items">
                  <a
                    className="link-buy4"
                    href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-1463"
                    target="_blank"
                  >
                    Buy eGift Cards
                  </a>
                </div>
                <div className="location-dropdown">
                  <div className="link-start1">Start a Group Gift</div>
                </div>
                <div className="link31">
                  <div className="for-business1">For Business</div>
                  <img className="icon10" alt="" src="/icon1.svg" />
                </div>
                <div className="action-buttons">
                  <div className="link-buy5">Buy in Store</div>
                </div>
              </div>
            </div>
            <div className="user-links-wrapper">
              <div className="user-links">
                <div className="link32">
                  <div className="user-items">
                    <div className="helpline1">Helpline</div>
                    <img
                      className="help-center-iconsvg1"
                      loading="lazy"
                      alt=""
                      src="/helpcentericonsvg@2x.png"
                    />
                  </div>
                </div>
                <div className="link33">
                  <div className="login-signup-group">
                    <div className="login-signup1">Login / Signup</div>
                    <img
                      className="user-login-iconsvg1"
                      loading="lazy"
                      alt=""
                      src="/userloginiconsvg@2x.png"
                    />
                  </div>
                </div>
                <div className="link34">
                  <div className="cart-group">
                    <div className="cart1">Cart</div>
                    <img
                      className="header-cart-iconsvg1"
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
    </LocalizationProvider>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
