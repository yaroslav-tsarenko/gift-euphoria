import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./PurchaseOptions.css";

const PurchaseOptions = ({ className = "" }) => {
  return (
    <div className={`purchase-options ${className}`}>
      <div className="content-wrapper">
        <div className="background-group">
          <div className="background20">
            <div className="banner-content">
              <div className="validity-12-months-wrapper">
                <div className="validity-12-months">Validity 12 months</div>
              </div>
              <div className="card-types3">
                <div className="background21">
                  <div className="container69">
                    <div className="online4">Online</div>
                  </div>
                </div>
                <div className="background22">
                  <div className="container70">
                    <div className="in-store4">In-Store</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="link-icon1"
              loading="lazy"
              alt=""
              src="/link@2x.png"
            />
          </div>
          <div className="background-parent1">
            <div className="background23">
              <div className="brand-list-content">
                <div className="search-input">
                  <div className="heading-61">
                    <div className="search-placeholder">
                      <div className="brands-included">Brands Included</div>
                      <div className="vertical-divider-wrapper">
                        <div className="vertical-divider" />
                      </div>
                    </div>
                    <div className="search-prefix">231</div>
                  </div>
                  <img
                    className="svg-icon1"
                    loading="lazy"
                    alt=""
                    src="/svg.svg"
                  />
                </div>
                <div className="search-content">
                  <div className="background24">
                    <TextField
                      className="backgroundborder"
                      placeholder="Search brands here"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <img width="16px" height="16px" src="/icon-2.svg" />
                        ),
                      }}
                      sx={{
                        "& fieldset": {
                          borderColor: "rgba(216, 216, 216, 0.5)",
                        },
                        "& .MuiInputBase-root": {
                          height: "40px",
                          backgroundColor: "#fff",
                          paddingLeft: "11px",
                          borderRadius: "6px",
                        },
                        "& .MuiInputBase-input": {
                          paddingLeft: "9px",
                          color: "#545454",
                        },
                      }}
                    />
                  </div>
                  <div className="filter-options">
                    <div className="link35">
                      <div className="all">ALL</div>
                    </div>
                    <div className="link36">
                      <div className="online5">ONLINE</div>
                    </div>
                    <div className="link37">
                      <div className="in-store5">IN-STORE</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container71">
                <div className="background25">
                  <div className="image14">
                    <img
                      className="d4f61390-151b-4f99-8837-88d90f-icon"
                      alt=""
                      src="/d4f61390151b4f99883788d90f79e6a7jpg@2x.png"
                    />
                  </div>
                  <div className="noon-wrapper">
                    <div className="noon">Noon</div>
                  </div>
                </div>
                <div className="background26">
                  <div className="image15">
                    <img
                      className="d031688c-fd6d-409f-8d78-a9cf08-icon"
                      alt=""
                      src="/d031688cfd6d409f8d78a9cf08d475b1jpg@2x.png"
                    />
                  </div>
                  <div className="amazonae-wrapper">
                    <div className="amazonae">Amazon.ae</div>
                  </div>
                </div>
                <div className="background27">
                  <div className="container72">
                    <div className="image16" />
                    <img
                      className="a5a0-a9e9-4678-87ec-795295c161-icon"
                      alt=""
                      src="/7238a5a0a9e9467887ec795295c16141jpg@2x.png"
                    />
                  </div>
                  <div className="mall-of-the">{`Mall of the Emirates & City Center`}</div>
                </div>
                <div className="background28">
                  <div className="container73">
                    <div className="image17" />
                    <img
                      className="fa584ad-d41c-417b-aebe-6379e9d-icon"
                      loading="lazy"
                      alt=""
                      src="/4fa584add41c417baebe6379e9d0e610png@2x.png"
                    />
                  </div>
                  <div className="malabar-gold-diamonds-wrapper">
                    <div className="malabar-gold">{`Malabar Gold & Diamonds`}</div>
                  </div>
                </div>
                <div className="background29">
                  <div className="image18">
                    <img
                      className="b75cc-8b1b-4511-98cd-ab5e3dd36-icon"
                      alt=""
                      src="/512b75cc8b1b451198cdab5e3dd36099png@2x.png"
                    />
                  </div>
                  <div className="sharaf-dg-wrapper">
                    <div className="sharaf-dg">Sharaf DG</div>
                  </div>
                </div>
                <div className="background30">
                  <div className="container74">
                    <div className="image19" />
                    <img
                      className="d0f4dde-0a78-49e5-9bba-a1b127f-icon"
                      alt=""
                      src="/2d0f4dde0a7849e59bbaa1b127f8cffbpng@2x.png"
                    />
                  </div>
                  <div className="joyalukkas-wrapper">
                    <div className="joyalukkas">Joyalukkas</div>
                  </div>
                </div>
                <div className="background31">
                  <div className="container75">
                    <div className="image20" />
                    <img
                      className="db307cd-11fc-471c-b53a-16fb030-icon"
                      alt=""
                      src="/1db307cd11fc471cb53a16fb030a4555png@2x.png"
                    />
                  </div>
                  <div className="alshaya-group-gift2">
                    Alshaya Group Gift Card
                  </div>
                </div>
                <div className="background32">
                  <div className="container76">
                    <div className="image21" />
                    <img
                      className="a0d53c-e43e-4d9f-a05a-ecccc91a-icon"
                      loading="lazy"
                      alt=""
                      src="/62a0d53ce43e4d9fa05aecccc91a53c3png@2x.png"
                    />
                  </div>
                  <div className="kalyan-jewellers-">
                    Kalyan Jewellers - Gold Jewellery
                  </div>
                </div>
              </div>
            </div>
            <div className="background33">
              <div className="description-headings">
                <div className="heading-62">About this Gift Card</div>
              </div>
              <img className="svg-icon2" alt="" src="/svg-1.svg" />
            </div>
            <FormControl
              className="background34"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#f2f5f8",
                borderRadius: "12px",
                width: "100%",
                height: "64px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "64px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "64px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "64px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "64px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#3a1a5f",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Roboto",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "20px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/svg-2.svg"
                    style={{ marginRight: "19px" }}
                  />
                )}
              >
                <MenuItem>{`Terms & Conditions`}</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="background35">
              <div className="heading-63">How to Use</div>
              <div className="about-icon-wrapper">
                <img className="about-icon" alt="" src="/vector-1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="product-details">
          <div className="product-title">
            <h3 className="heading-18">Gift Card</h3>
            <div className="product-price">
              <div className="aed-50-">AED 50 - AED 5000</div>
            </div>
          </div>
          <div className="control-buttons">
            <div className="product-info">
              <Button
                className="button2"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#c5445e",
                  fontSize: "18",
                  background: "#fff",
                  border: "#c5445e solid 3px",
                  borderRadius: "12px",
                  "&:hover": { background: "#fff" },
                  height: 81,
                }}
              >
                Gift a Friend
              </Button>
              <div className="button3">
                <div className="buy-for-self">Buy for Self</div>
              </div>
            </div>
          </div>
          <div className="quantity-display">
            <div className="purchase-buttons">
              <div className="value-container">
                <img
                  className="link-minus-circlepng"
                  loading="lazy"
                  alt=""
                  src="/link--minuscirclepng@2x.png"
                />
              </div>
              <h1 className="aed">AED</h1>
              <div className="error-message">500</div>
              <div className="value-container1">
                <img
                  className="link-plus-circlepng"
                  loading="lazy"
                  alt=""
                  src="/link--pluscirclepng@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="control-buttons1">
            <div className="quantity-controls">
              <div className="link38">
                <div className="custom">Custom</div>
              </div>
              <div className="link39">
                <div className="aed-50">AED 50</div>
              </div>
              <div className="link40">
                <div className="aed-100">AED 100</div>
              </div>
              <div className="link41">
                <div className="aed-200">AED 200</div>
              </div>
              <div className="link42">
                <div className="aed-500">AED 500</div>
              </div>
            </div>
          </div>
          <div className="quantity-content-wrapper">
            <div className="quantity-content">
              <div className="heading-64">Quantity</div>
              <div className="custom-options">
                <div className="link43">
                  <div className="quantity-placeholder">1</div>
                  <div className="decrement-icon">
                    <img className="icon11" alt="" src="/icon-3.svg" />
                  </div>
                </div>
                <Button
                  className="button4"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#c5445e",
                    border: "#c5445e solid 2px",
                    borderRadius: "12px",
                    "&:hover": { background: "#c5445e" },
                    height: 50,
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PurchaseOptions.propTypes = {
  className: PropTypes.string,
};

export default PurchaseOptions;
