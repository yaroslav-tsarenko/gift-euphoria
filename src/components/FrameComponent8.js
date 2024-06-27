import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <div className={`frame-container ${className}`}>
      <div className="happy-you-card-header-wrapper">
        <div className="happy-you-card-header">
          <div className="heading-16">Popular Gift Cards</div>
          <div className="one-card-description">
            <div className="one-card-all">One Card. All Brands.</div>
          </div>
        </div>
      </div>
      <div className="container37">
        <div className="container38">
          <img
            className="ea8974-54f5-4cd1-9ec5-ab2e81c4-icon"
            alt=""
            src="/26ea897454f54cd19ec5ab2e81c44ebapng@2x.png"
          />
          <img
            className="a6d42ec-5474-4179-8bf9-50467f6-icon"
            alt=""
            src="/6a6d42ec547441798bf950467f6752f8png@2x.png"
          />
          <img
            className="f5c7c0eb-2421-4c5e-939f-56838d-icon"
            alt=""
            src="/f5c7c0eb24214c5e939f56838db96628jpg@2x.png"
          />
          <img
            className="fd3ce61-5f72-4081-829e-e883e76-icon"
            alt=""
            src="/9fd3ce615f724081829ee883e76191e4png@2x.png"
          />
          <img
            className="e6f7b19-23f3-4657-bdf9-6f180d8-icon"
            alt=""
            src="/3e6f7b1923f34657bdf96f180d8b679bpng@2x.png"
          />
          <img
            className="ae53c1c-bb39-48e1-9f3e-7f4f294-icon"
            alt=""
            src="/3ae53c1cbb3948e19f3e7f4f294853ecpng@2x.png"
          />
        </div>
        <div className="wrapper-link">
          <img className="link-icon" alt="" src="/link@2x.png" />
        </div>
      </div>
      <div className="happy-you-card-features">
        <div className="frame-div">
          <div className="happy-card-giftsvg-parent">
            <img
              className="happy-card-giftsvg-icon"
              alt=""
              src="/happycardgiftsvg.svg"
            />
            <div className="choice-parent">
              <div className="choice">Choice</div>
              <div className="brands">900 + Brands</div>
            </div>
          </div>
          <div className="happy-card-emailsvg-parent">
            <img
              className="happy-card-emailsvg-icon"
              alt=""
              src="/happycardemailsvg.svg"
            />
            <div className="convenience-parent">
              <div className="convenience">Convenience</div>
              <div className="digital-delivery">Digital Delivery</div>
            </div>
          </div>
          <div className="happy-card-storesvg-parent">
            <img
              className="happy-card-storesvg-icon"
              alt=""
              src="/happycardstoresvg.svg"
            />
            <div className="acceptance-parent">
              <div className="acceptance">Acceptance</div>
              <div className="online-in-store">{`Online & In-store`}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="see-all-happy-you-cards">
        <div className="link20">
          <a
            className="see-all-happyyou"
            href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-1463"
            target="_blank"
          >
            See all HappyYOU Cards
          </a>
          <div className="icon-wrapper1">
            <img className="icon7" alt="" src="/icon3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
