import FeaturedCardContainers from "./FeaturedCardContainers";
import Container from "./Container";
import StarbucksCard from "./StarbucksCard";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`card-types-parent ${className}`}>
      <div className="card-types">
        <div className="heading-1">Featured eGift Cards</div>
        <div className="card-type-containers">
          <div className="background5">
            <div className="container9">
              <div className="online">Online</div>
            </div>
          </div>
        </div>
        <div className="card-type-containers1">
          <div className="background6">
            <div className="container10">
              <div className="in-store">In-Store</div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-card-containers-parent">
        <FeaturedCardContainers
          ea965a101ec4efa82542ce656="/2ea965a101ec4efa82542ce656c384c7png@2x.png"
          linkHeading5HappyYOUCard="Alton Card"
        />
        <FeaturedCardContainers
          ea965a101ec4efa82542ce656="/62005010901b477cb074cc788a79acd2png@2x.png"
          linkHeading5HappyYOUCard=" Thank You Card"
          propHeight="240.2px"
          propWidth="291.5px"
          propPadding="12px 0px 0px"
        />
        <Container
          e2e2858f8e4acd9e213c6bd76="/67e2e2858f8e4acd9e213c6bd76587c6png@2x.png"
          alshayaGroupGift="Alshaya Group Gift"
          card="Card"
        />
        <StarbucksCard
          b1322e9dBc1548e79ba01b2da="/b1322e9dbc1548e79ba01b2da7a04fb4png@2x.png"
          linkHeading5STARBUCKS="STARBUCKS"
        />
      </div>
      <div className="link7">
        <a
          className="see-all-egift"
          href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-1463"
          target="_blank"
        >
          See all eGift Cards
        </a>
        <div className="featured-see-all-icon-parent">
          <img className="icon3" alt="" src="/icon2.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
