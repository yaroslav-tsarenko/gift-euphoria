import FeaturedCardContainers from "./FeaturedCardContainers";
import Container from "./Container";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`heading-1-payout-budgeting-parent ${className}`}>
      <div className="heading-14">{`Payout & Budgeting eGift Cards`}</div>
      <div className="payout-card-container-parent">
        <FeaturedCardContainers
          ea965a101ec4efa82542ce656="/f375361e76044adb8be7839b144adab1png@2x.png"
          linkHeading5HappyYOUCard="Amazon.ae"
          propHeight="240.2px"
          propWidth="291.5px"
          propPadding="12px 0px 0px"
        />
        <FeaturedCardContainers
          ea965a101ec4efa82542ce656="/76b3f8efe571481abe7df0dc1ce5ec67jpg@2x.png"
          linkHeading5HappyYOUCard="LuLu Hypermarket"
          propHeight="240.7px"
          propWidth="291.5px"
          propPadding="11.5px 0px 0px"
        />
        <FeaturedCardContainers
          ea965a101ec4efa82542ce656="/63b4f57a184f4bdd91b1db5d2456019bjpg@2x.png"
          linkHeading5HappyYOUCard="Noon"
          propHeight="240.7px"
          propWidth="291.5px"
          propPadding="11.5px 0px 0px"
        />
        <Container
          e2e2858f8e4acd9e213c6bd76="/789a53d96929411888382c10b17b6ce5png@2x.png"
          alshayaGroupGift={`Mall of the Emirates &`}
          card="City Centre"
        />
      </div>
      <div className="link10">
        <div className="see-all-egift3">See all eGift Cards</div>
        <div className="icon-frame">
          <img className="icon6" alt="" src="/icon2.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
