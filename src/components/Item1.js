import PropTypes from "prop-types";
import "./Item1.css";

const Item1 = ({ className = "" }) => {
  return (
    <div className={`item2 ${className}`}>
      <div className="googlepng-parent">
        <img className="googlepng-icon2" alt="" src="/googlepng@2x.png" />
        <div className="starsvg-container">
          <img className="starsvg-icon14" alt="" src="/starsvg.svg" />
          <img className="starsvg-icon15" alt="" src="/starsvg.svg" />
          <img className="starsvg-icon16" alt="" src="/starsvg.svg" />
          <img className="starsvg-icon17" alt="" src="/starsvg.svg" />
          <img className="starsvg-icon18" alt="" src="/starsvg.svg" />
        </div>
      </div>
      <div className="heading-53">
        <div className="easy-and-simple">Easy and simple top use</div>
      </div>
      <div className="i-love-the-convenience-and-eas-wrapper">
        <div className="i-love-the">
          {" "}
          I love the convenience and ease of use. The digital delivery option is
          fantastic, especially for long-distance gifting. I sent a gift card to
          my sister who lives in another state, and she received it immediately.
          The entire process from selection to delivery was seamless. Great
          experience overall, and I will definitely be using [Your Company Name]
          for all my future gift-giving occasions.
        </div>
      </div>
      <div className="from-jessica-hana-parent">
        <div className="from-jessica-hana">From: Jessica Hana</div>
        <div className="link-see2">See it on Google</div>
      </div>
    </div>
  );
};

Item1.propTypes = {
  className: PropTypes.string,
};

export default Item1;
