import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import CardQuantity from "./CardQuantity";
import PropTypes from "prop-types";
import "./ProductRow.css";

const ProductRow = ({ className = "" }) => {
  return (
    <div className={`product-row ${className}`}>
      <div className="cart-actions">
        <div className="header6">
          <div className="header-child" />
          <div className="subtotal-details">
            <div className="product">Product</div>
          </div>
          <div className="subtotal-details1">
            <div className="price">Price</div>
          </div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        <div className="company-links">
          <img
            className="cards-icon1"
            loading="lazy"
            alt=""
            src="/cards@2x.png"
          />
          <div className="panorma-presents-gift-card-wrapper">
            <div className="panorma-presents-gift1">
              {" "}
              Panorma Presents Gift Card
            </div>
          </div>
          <div className="quantity-value">
            <div className="policy-navigation">$120.00</div>
          </div>
          <div className="social-links2">
            <div className="socials-title">
              <div className="grand-total">
                <img
                  className="icon-plus1"
                  loading="lazy"
                  alt=""
                  src="/iconplus.svg"
                />
              </div>
              <div className="facebook-link">1</div>
              <div className="grand-total1">
                <img
                  className="icon-minus1"
                  loading="lazy"
                  alt=""
                  src="/iconminus.svg"
                />
              </div>
            </div>
            <FormControl
              className="app-download1"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#c5445e",
                borderRadius: "8px",
                width: "51.21951219512195%",
                height: "38px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Roboto",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="error" />
              <Select
                color="error"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/frame-1000002972.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Hourly</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="copyright">$10.11</div>
        </div>
      </div>
      <CardQuantity
        cards="/cards-1@2x.png"
        panormaPresentsGiftCard=" Panorma Presents Gift Card"
        divider="$200.00"
      />
      <CardQuantity
        cards="/cards-2@2x.png"
        panormaPresentsGiftCard="Panorma Presents Gift Card"
        divider="$120.00"
      />
      <div className="country-links">
        <div className="country-selection" />
        <Button
          className="button6"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#c5445e",
            borderRadius: "4px",
            "&:hover": { background: "#c5445e" },
            width: 200,
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

ProductRow.propTypes = {
  className: PropTypes.string,
};

export default ProductRow;
