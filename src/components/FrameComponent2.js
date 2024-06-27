import Header from "./Header";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`header-group ${className}`}>
      <Header />
      <div className="banner-container">
        <div className="banner-image-parent-parent">
          <div className="banner-image-parent">
            <img
              className="e5981823-bb18-4432-a701-16ae11-icon"
              alt=""
              src="/e5981823bb184432a70116ae112cde2bpng@2x.png"
            />
          </div>
          <div className="link4">
            <img className="container-icon" alt="" src="/container@2x.png" />
          </div>
          <div className="link5">
            <img className="container-icon1" alt="" src="/container@2x.png" />
          </div>
          <div className="link6">
            <img className="container-icon2" alt="" src="/container@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
