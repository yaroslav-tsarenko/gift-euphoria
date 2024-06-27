import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./CardQuantity.css";

const CardQuantity = ({
  className = "",
  cards,
  panormaPresentsGiftCard,
  divider,
}) => {
  return (
    <div className={`card-quantity ${className}`}>
      <div className="hourly-details" />
      <div className="plus-button">
        <div className="wrapper-cards">
          <img className="cards-icon" loading="lazy" alt="" src={cards} />
        </div>
        <div className="item-actions">
          <div className="panorma-presents-gift">{panormaPresentsGiftCard}</div>
        </div>
        <div className="plus-icons">
          <div className="divider">{divider}</div>
        </div>
        <div className="checkout-button">
          <div className="hour-values-parent">
            <div className="hour-values">
              <img
                className="icon-plus"
                loading="lazy"
                alt=""
                src="/iconplus.svg"
              />
            </div>
            <div className="checkout-title">1</div>
            <div className="item-pricing">
              <img
                className="icon-minus"
                loading="lazy"
                alt=""
                src="/iconminus.svg"
              />
            </div>
          </div>
          <FormControl
            className="parent"
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
                  src="/frame-1000002972-1.svg"
                  style={{ marginRight: "16px" }}
                />
              )}
            >
              <MenuItem>Hourly</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="company-logo">$10.11</div>
      </div>
    </div>
  );
};

CardQuantity.propTypes = {
  className: PropTypes.string,
  cards: PropTypes.string,
  panormaPresentsGiftCard: PropTypes.string,
  divider: PropTypes.string,
};

export default CardQuantity;
