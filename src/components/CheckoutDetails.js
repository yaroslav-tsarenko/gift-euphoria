import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./CheckoutDetails.css";

const CheckoutDetails = ({ className = "" }) => {
  return (
    <div className={`checkout-details ${className}`}>
      <div className="social-header">
        <TextField
          className="header7"
          placeholder="Checkout Details"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "54px",
              backgroundColor: "#c5445e",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#fff" },
          }}
        />
      </div>
      <div className="subtotal-values-wrapper">
        <div className="subtotal-values">
          <div className="cart-subtotal">Cart Subtotal</div>
          <div className="grand-total-label">$360.00</div>
        </div>
      </div>
      <div className="app-download2">
        <div className="shipping-costs">
          <div className="cost-breakdown">
            <div className="shipping-handling">{`Shipping & Handling`}</div>
            <div className="other-taxes">Other Taxes</div>
          </div>
          <div className="other-tax-labels">
            <div className="div10">$0.00</div>
            <div className="div11">$0.00</div>
          </div>
        </div>
      </div>
      <div className="region-links">
        <div className="company-info" />
      </div>
      <div className="checkout-details-inner">
        <div className="grand-total-parent">
          <div className="grand-total2">Grand Total</div>
          <div className="div12">$360.00</div>
        </div>
      </div>
    </div>
  );
};

CheckoutDetails.propTypes = {
  className: PropTypes.string,
};

export default CheckoutDetails;
