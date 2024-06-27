import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`frame-parent ${className}`}>
      <div className="heading-1-birthday-egift-car-parent">
        <div className="heading-12">Celebration eGift Cards</div>
        <div className="card-types1">
          <div className="background10">
            <div className="container21">
              <div className="online2">Online</div>
            </div>
          </div>
        </div>
        <div className="card-types2">
          <div className="background11">
            <div className="container22">
              <div className="in-store2">In-Store</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-parent">
        <div className="container23">
          <img
            className="f31a06a1-6e8e-4572-90bc-f35129-icon"
            alt=""
            src="/f31a06a16e8e457290bcf35129c39a52png@2x.png"
          />
          <div className="link-heading13">Birthday Card</div>
        </div>
        <div className="container24">
          <img
            className="b84a1d-32c3-4d72-8525-dd9d61af-icon"
            alt=""
            src="/80b84a1d32c34d728525dd9d61af8294png@2x.png"
          />
          <div className="link-heading14">HappyYOU Birthday Card</div>
        </div>
        <div className="container25">
          <img
            className="e8e59b24-2de6-432d-9fde-2bbd65-icon"
            alt=""
            src="/e8e59b242de6432d9fde2bbd6559f359png@2x.png"
          />
          <div className="link-heading15">HappyYOU Birthday Card</div>
        </div>
        <div className="container26">
          <img
            className="fbe683d-cb90-4c35-8b60-ba8779c-icon"
            alt=""
            src="/4fbe683dcb904c358b60ba8779c6a7depng@2x.png"
          />
          <div className="link-heading16">HappyYOU Birthday Card</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
