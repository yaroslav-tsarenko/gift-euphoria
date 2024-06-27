import PropTypes from "prop-types";
import "./Recommendations.css";

const Recommendations = ({ className = "" }) => {
  return (
    <div className={`recommendations ${className}`}>
      <div className="frame-parent4">
        <div className="frame-parent5">
          <div className="heading-2-recommended-egift-container">
            <div className="heading-21">Recommended eGift Cards</div>
          </div>
          <div className="tablist1">
            <div className="tab-parent">
              <div className="tab1">
                <div className="recommended1">Recommended</div>
              </div>
              <div className="horizontal-divider1" />
            </div>
            <div className="how-to-use-wrapper">
              <div className="how-to-use1">How to Use</div>
            </div>
          </div>
        </div>
        <div className="recommended-cards">
          <div className="container65">
            <img
              className="b8f0cc5-e47f-4879-9ad9-af344de-icon1"
              alt=""
              src="/9b8f0cc5e47f48799ad9af344de0481ajpg@2x.png"
            />
            <div className="link-heading42">Noon</div>
          </div>
          <div className="container66">
            <img
              className="feb96f9c-00a8-4b46-8fd1-0faf50-icon1"
              alt=""
              src="/feb96f9c00a84b468fd10faf5086edcapng@2x.png"
            />
            <a
              className="link-heading43"
              href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-2362"
              target="_blank"
            >
              HappyYOU Card
            </a>
          </div>
          <div className="container67">
            <img
              className="d15528a2-6ec1-4ecd-9bef-f81877-icon1"
              alt=""
              src="/d15528a26ec14ecd9beff8187792a6ddpng@2x.png"
            />
            <div className="link-heading44">{`Mall of the Emirates & City Centre`}</div>
          </div>
          <div className="container68">
            <img
              className="c6c37-a650-4bad-9515-a032e09a4-icon1"
              alt=""
              src="/545c6c37a6504bad9515a032e09a4039png@2x.png"
            />
            <div className="link-heading45">HappyYOU Well Done Card</div>
          </div>
        </div>
      </div>
      <div className="notification">
        <div className="backgroundshadow1">
          <div className="get-notified-new-brands-of-wrapper">
            <div className="get-notified-container1">
              <span>{`Get Notified `}</span>
              <span className="span1">{`| `}</span>
              <span>{`New Brands & Offers`}</span>
            </div>
          </div>
          <div className="form1">
            <div className="icon-wrapper3">
              <img className="icon9" alt="" src="/icon4.svg" />
            </div>
            <div className="input-wrapper">
              <div className="input1">
                <div className="enter-your-email1">Enter your email</div>
              </div>
            </div>
            <div className="button1">
              <div className="submit1">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Recommendations.propTypes = {
  className: PropTypes.string,
};

export default Recommendations;
