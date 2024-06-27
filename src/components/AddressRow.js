import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./AddressRow.css";

const AddressRow = ({ className = "" }) => {
  return (
    <section className={`address-row ${className}`}>
      <div className="billing-form-parent">
        <form className="billing-form">
          <div className="billing-content">
            <h2 className="checkout1">Checkout</h2>
            <TextField
              className="header10"
              placeholder="Billing Details"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#c5445e",
                  borderRadius: "5px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": { color: "#fff" },
              }}
            />
            <div className="form-field-block">
              <div className="row-1">
                <div className="block-1">
                  <div className="first-name">First Name</div>
                </div>
                <div className="block-2">
                  <div className="last-name">Last Name</div>
                </div>
              </div>
              <div className="row-2">
                <div className="block-11">
                  <div className="company-name">Company Name</div>
                </div>
                <div className="block-21">
                  <div className="country">Country</div>
                  <img className="icon15" alt="" src="/icon-2.svg" />
                </div>
              </div>
              <div className="row-3">
                <div className="block-12">
                  <div className="street-address">Street Address</div>
                </div>
              </div>
              <TextField
                className="block-22"
                placeholder="Apartment / Suite / Unit / etc. (Optional)"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none", borderColor: "#fff" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="row-4">
                <div className="block-13">
                  <div className="town-city">Town / City</div>
                </div>
              </div>
              <TextField
                className="block-23"
                placeholder="Email Address"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none", borderColor: "#fff" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="row-5">
                <div className="block-14">
                  <div className="zip">ZIP</div>
                </div>
                <div className="block-24">
                  <div className="phone">Phone</div>
                </div>
              </div>
            </div>
            <div className="billing-separator" />
            <div className="billing-header-items">
              <Button
                className="button7"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#c5445e",
                  fontSize: "16",
                  borderColor: "#a8ba85",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#a8ba85" },
                  width: 100,
                  height: 54,
                }}
              >
                Back
              </Button>
              <Button
                className="button8"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#c5445e",
                  borderRadius: "4px",
                  "&:hover": { background: "#c5445e" },
                  width: 132,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
          <div className="billing-header">
            <div className="checkout-details1">
              <TextField
                className="header11"
                placeholder="Checkout Details"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "54px",
                    backgroundColor: "#c5445e",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#fff" },
                }}
              />
              <div className="cart-subtotal-parent">
                <div className="cart-subtotal1">Cart Subtotal</div>
                <div className="order-detail-values">$360.00</div>
              </div>
              <div className="shipping-handling-parent">
                <div className="shipping-handling1">{`Shipping & Handling`}</div>
                <div className="div17">$0.00</div>
              </div>
              <div className="other-taxes-parent">
                <div className="other-taxes1">Other Taxes</div>
                <div className="div18">$0.00</div>
              </div>
              <div className="order-details-separator" />
              <div className="grand-total-group">
                <div className="grand-total3">Grand Total</div>
                <div className="div19">$360.00</div>
              </div>
            </div>
            <div className="transfer-options">
              <TextField
                className="header12"
                placeholder="Transfer Options"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "54px",
                    backgroundColor: "#c5445e",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#fff" },
                }}
              />
              <div className="checkout-details2">
                <div className="logos-block">
                  <div className="block-15">
                    <div className="logo-block">
                      <img
                        className="image-1-icon"
                        loading="lazy"
                        alt=""
                        src="/image-1@2x.png"
                      />
                    </div>
                    <div className="bank-transfer">
                      <p className="bank">Bank</p>
                      <p className="transfer">Transfer</p>
                    </div>
                  </div>
                  <div className="block-25">
                    <div className="logo-block1">
                      <img
                        className="image-2-icon"
                        loading="lazy"
                        alt=""
                        src="/image-2@2x.png"
                      />
                    </div>
                    <div className="google-pay">
                      <p className="google">Google</p>
                      <p className="pay">Pay</p>
                    </div>
                  </div>
                </div>
                <div className="block-3-parent">
                  <div className="block-3">
                    <div className="logo-block2">
                      <img
                        className="image-3-icon"
                        loading="lazy"
                        alt=""
                        src="/image-3@2x.png"
                      />
                    </div>
                    <div className="apple-pay">
                      <p className="apple">Apple</p>
                      <p className="pay1">Pay</p>
                    </div>
                  </div>
                  <div className="block-4">
                    <div className="logo-block3">
                      <img
                        className="image-4-icon"
                        loading="lazy"
                        alt=""
                        src="/image-4@2x.png"
                      />
                    </div>
                    <div className="paypal">PayPal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="checkout2">
          <TextField
            className="header13"
            placeholder="Checkout"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#c5445e",
                borderRadius: "5px",
                fontSize: "18px",
              },
              "& .MuiInputBase-input": { color: "#fff" },
            }}
          />
          <div className="checkout-details3">
            <div className="your-personal-data">
              Your Personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our product
            </div>
            <Button
              className="button9"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#c5445e",
                borderRadius: "4px",
                "&:hover": { background: "#c5445e" },
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

AddressRow.propTypes = {
  className: PropTypes.string,
};

export default AddressRow;
