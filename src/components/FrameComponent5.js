import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`frame-group ${className}`}>
      <div className="heading-1-popular-occasions-parent">
        <div className="heading-13">Popular Occasions</div>
        <div className="popular-occasion-types">
          <div className="background12">
            <div className="container27">
              <div className="online3">Online</div>
            </div>
          </div>
        </div>
        <div className="popular-occasion-types1">
          <div className="background13">
            <div className="container28">
              <div className="in-store3">In-Store</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-group">
        <div className="container29">
          <img
            className="b-477c-b074-cc788a79acd2png-icon"
            alt=""
            src="/62005010901b477cb074cc788a79acd2png@2x.png"
          />
          <div className="link-heading17">HappyYOU Thank You Card</div>
        </div>
        <div className="container30">
          <img
            className="eb927f-b469-42b9-be14-15db7447-icon"
            alt=""
            src="/03eb927fb46942b9be1415db7447a65bpng@2x.png"
          />
          <div className="link-heading18">HappyYOU Congrats Card</div>
        </div>
        <div className="container31">
          <img
            className="dbf-bef3-4f5b-9956-5317f00faa1-icon"
            alt=""
            src="/95995dbfbef34f5b99565317f00faa1apng@2x.png"
          />
          <div className="link-heading19">HappyYOU Farewell Card</div>
        </div>
        <div className="container32">
          <img
            className="a0-5d26-47e9-a065-906e7407c793-icon"
            alt=""
            src="/177717a05d2647e9a065906e7407c793png@2x.png"
          />
          <div className="link-heading20">HappyYOU Love Card</div>
        </div>
        <div className="container33">
          <img
            className="e48ea7b-cd54-4a5f-9bd8-a68cc0b-icon"
            alt=""
            src="/0e48ea7bcd544a5f9bd8a68cc0b7e2depng@2x.png"
          />
          <div className="link-heading21">HappyYOU Wedding Card</div>
        </div>
        <div className="container34">
          <img
            className="d3c45-7c37-4515-915f-9737c4356-icon"
            alt=""
            src="/562d3c457c374515915f9737c4356c69png@2x.png"
          />
          <div className="link-heading22">HappyYOU New Baby Card</div>
        </div>
        <div className="container35">
          <img
            className="d09c4e-112f-4c18-9444-67303136-icon"
            alt=""
            src="/74d09c4e112f4c18944467303136dbacpng@2x.png"
          />
          <div className="link-heading23">HappyYOU Well Done Card</div>
        </div>
        <div className="container36">
          <img
            className="ceefa0-9f91-4d90-9040-7825e78a-icon"
            alt=""
            src="/69ceefa09f914d9090407825e78a4f75png@2x.png"
          />
          <div className="link-heading24">HappyYOU Good Luck Card</div>
        </div>
      </div>
      <div className="link9">
        <a
          className="see-all-egift2"
          href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-3887"
          target="_blank"
        >
          See all eGift Cards
        </a>
        <div className="icon-container">
          <img className="icon5" alt="" src="/icon2.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
