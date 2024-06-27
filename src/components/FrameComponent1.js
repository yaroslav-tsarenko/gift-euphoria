import FeaturedCardContainers from "./FeaturedCardContainers";
import StarbucksCard from "./StarbucksCard";
import Container1 from "./Container1";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`single-brand-card-types-parent ${className}`}>
      <div className="single-brand-card-types">
        <div className="heading-11">Brand eGift Cards</div>
        <div className="single-brand-card-type-contain">
          <div className="background8">
            <div className="container13">
              <div className="online1">Online</div>
            </div>
          </div>
        </div>
        <div className="single-brand-card-type-contain1">
          <div className="background9">
            <div className="container14">
              <div className="in-store1">In-Store</div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-brand-card-list">
        <div className="single-brand-card-items">
          <div className="single-brand-card-image-contai-parent">
            <FeaturedCardContainers
              ea965a101ec4efa82542ce656="/76b3f8efe571481abe7df0dc1ce5ec67jpg@2x.png"
              linkHeading5HappyYOUCard="LuLu Hypermarket"
              propHeight="232.7px"
              propWidth="291.5px"
              propPadding="4.5px 0px 0px"
            />
            <FeaturedCardContainers
              ea965a101ec4efa82542ce656="/63b4f57a184f4bdd91b1db5d2456019bjpg@2x.png"
              linkHeading5HappyYOUCard="Noon"
              propHeight="232.7px"
              propWidth="291.5px"
              propPadding="4.5px 0px 0px"
            />
            <StarbucksCard
              b1322e9dBc1548e79ba01b2da="/2e6210a1a1f94aa0b771b440e16386fcjpg@2x.png"
              linkHeading5STARBUCKS="Sharaf DG"
              propPadding="4px 0px 0px"
            />
            <Container1
              e57fa64445b74a8491814262a="/e57fa64445b74a8491814262a2c03844png@2x.png"
              linkHeading5Carrefour="Carrefour"
              iNSTOREOnly="IN-STORE only"
            />
          </div>
        </div>
        <div className="popular-cards">
          <div className="container15">
            <img
              className="f375361e-7604-4adb-8be7-839b14-icon"
              alt=""
              src="/f375361e76044adb8be7839b144adab1png@2x.png"
            />
            <div className="link-heading7">Amazon.ae</div>
          </div>
          <div className="container16">
            <img
              className="e6e6426b-82b8-4974-a527-2a693d-icon"
              alt=""
              src="/e6e6426b82b84974a5272a693d2d4dddjpg@2x.png"
            />
            <div className="link-heading8">SHEIN</div>
          </div>
          <Container1
            e57fa64445b74a8491814262a="/194b920f3885439f9a9fc369043c02e7png@2x.png"
            linkHeading5Carrefour="Virgin Megastore"
            iNSTOREOnly="IN-STORE only"
            propWidth="291px"
            propHeight="unset"
          />
          <div className="container17">
            <img
              className="c94c674-6d6c-4fdf-845d-bea169a-icon"
              alt=""
              src="/8c94c6746d6c4fdf845dbea169a105abjpg@2x.png"
            />
            <div className="link-heading9">Talabat</div>
          </div>
          <div className="container18">
            <img
              className="ab5f42-ff8a-4549-972f-f95cf74f-icon"
              alt=""
              src="/09ab5f42ff8a4549972ff95cf74f6c4ajpg@2x.png"
            />
            <div className="link-heading10">iTunes Gift Cards UAE Store</div>
          </div>
          <div className="container19">
            <img
              className="c6f3e6b6-bd6e-4159-85bc-d72977-icon"
              alt=""
              src="/c6f3e6b6bd6e415985bcd72977830b4fpng@2x.png"
            />
            <div className="link-heading11">IKEA</div>
          </div>
          <div className="container20">
            <img
              className="cbc890-0b4d-4d28-8766-e94203f4-icon"
              alt=""
              src="/99cbc8900b4d4d288766e94203f49d77jpg@2x.png"
            />
            <div className="link-heading12">Home Centre</div>
          </div>
          <Container1
            e57fa64445b74a8491814262a="/a9c3186a3ec040b3b2291faeecbc4e7epng@2x.png"
            linkHeading5Carrefour="VOX Cinemas"
            iNSTOREOnly="IN-STORE only"
            propWidth="291px"
            propHeight="unset"
          />
        </div>
        <div className="link8">
          <a
            className="see-all-egift1"
            href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-2949"
            target="_blank"
          >
            See all eGift Cards
          </a>
          <div className="icon-wrapper">
            <img className="icon4" alt="" src="/icon2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
