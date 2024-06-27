import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./DashboardContent.css";

const DashboardContent = ({ className = "" }) => {
  return (
    <section className={`dashboard-content ${className}`}>
      <div className="dashboard-header-parent">
        <div className="dashboard-header">
          <div className="your-dashboard">Your Dashboard</div>
          <TextField
            className="header2"
            placeholder="Your Active Downloads"
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
          <div className="dashboard-cards">
            <div className="card-container">
              <div className="card-row">
                <div className="wrapper-cards">
                  <img
                    className="cards-icon"
                    loading="lazy"
                    alt=""
                    src="/cards@2x.png"
                  />
                </div>
                <div className="card-content">
                  <div className="panorma-presents-gift">
                    {" "}
                    Panorma Presents Gift Card
                  </div>
                </div>
                <div className="card-credits">
                  <div className="download-credit-details">$100.00</div>
                  <div className="credits">12 Credits</div>
                </div>
              </div>
              <div className="up-time">
                <div className="up-time1">Up Time</div>
                <div className="hrs">120 Hrs</div>
              </div>
              <div className="card-actions">
                <div className="action-icons">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                </div>
                <div className="renewal-details">
                  <div className="renewal-info">
                    <div className="next-renewal">
                      <div className="next-renewal1">Next Renewal</div>
                      <div className="april-2024">24 April, 2024</div>
                    </div>
                  </div>
                  <div className="cancellation">
                    <div className="cancel">Cancel</div>
                    <div className="renewal-button">
                      <div className="renewal-icon">
                        <img
                          className="icons-block1"
                          alt=""
                          src="/icons-block-1.svg"
                        />
                      </div>
                      <div className="renew">Renew</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-cards-child" />
          </div>
        </div>
        <div className="checkout-details-wrapper">
          <div className="checkout-details">
            <div className="user-details-header">
              <TextField
                className="header3"
                placeholder="User Details"
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
            <div className="detail-rows">
              <div className="detail-items">
                <div className="name">Name</div>
                <div className="darnell-roob">Darnell Roob</div>
              </div>
            </div>
            <div className="detail-rows1">
              <div className="email-address-parent">
                <div className="email-address">Email Address</div>
                <div className="darnellroobhotmailcom">
                  Darnell.Roob@hotmail.com
                </div>
              </div>
            </div>
            <div className="detail-rows2">
              <div className="plan-parent">
                <div className="plan">Plan</div>
                <div className="basic">Basic</div>
              </div>
            </div>
            <div className="detail-rows3">
              <div className="expiry-date-parent">
                <div className="expiry-date">Expiry Date</div>
                <div className="april-20241">24 April, 2024</div>
              </div>
            </div>
            <div className="detail-rows4">
              <div className="auto-renewal-parent">
                <div className="auto-renewal">Auto Renewal</div>
                <div className="on">On</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DashboardContent.propTypes = {
  className: PropTypes.string,
};

export default DashboardContent;
