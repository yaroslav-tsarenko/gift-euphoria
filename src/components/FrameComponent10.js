import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section className={`backgroundshadow-container ${className}`}>
      <div className="backgroundshadow2">
        <div className="get-notified-new-brands-of-container">
          <h1 className="get-notified-container2">
            <span>{`Get Notified `}</span>
            <span className="span2">{`| `}</span>
            <span>{`New Brands & Offers`}</span>
          </h1>
        </div>
        <div className="form2">
          <div className="email-icon-container1">
            <img className="icon12" alt="" src="/icon4.svg" />
          </div>
          <div className="email-input-container1">
            <div className="input2">
              <div className="enter-your-email2">Enter your email</div>
            </div>
          </div>
          <Button
            className="button5"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#808080",
              borderRadius: "6px",
              "&:hover": { background: "#808080" },
              width: 155,
              height: 40,
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
