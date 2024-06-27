import { Button } from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./ContactForm.css";

const ContactForm = ({ className = "" }) => {
  return (
    <div className={`contact-form ${className}`}>
      <FrameComponent1
        contactInformation="Contact Information"
        formLabelPlaceholder="Email"
      />
      <h3 className="payment-information">Payment Information</h3>
      <div className="card-information-parent">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="card-number-placeholder">1234 1234 1234 1234</div>
          <div className="frame-parent2">
            <img
              className="frame-inner"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="frame-icon"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="frame-child1"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon3" alt="" src="/icon.svg" />
        </div>
        <div className="form-field-parent">
          <div className="form-field2">
            <div className="mmyy">MM/YY</div>
            <img className="icon4" alt="" src="/icon.svg" />
          </div>
          <div className="form-field3">
            <div className="mmyy1">MM/YY</div>
            <img className="icon5" alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
      <FrameComponent1
        contactInformation="Carholder Name"
        formLabelPlaceholder="Name on Card"
      />
      <div className="country-or-region-parent">
        <div className="country-or-region">Country or region</div>
        <div className="form-field4">
          <div className="usa">USA</div>
          <img
            className="form-field-child"
            alt=""
            src="/frame-1000006889.svg"
          />
          <img className="icon6" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="frame-parent3">
        <div className="frame-child2" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="contact-form-child"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <Button
        className="button2"
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
        Pay Now
      </Button>
    </div>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
