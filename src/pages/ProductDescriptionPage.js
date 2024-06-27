import Header1 from "../components/Header1";
import PurchaseOptions from "../components/PurchaseOptions";
import FrameComponent10 from "../components/FrameComponent10";
import Footer from "../components/Footer";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage = () => {
  return (
    <div className="productdescriptionpage">
      <section className="main">
        <Header1 />
        <PurchaseOptions />
      </section>
      <section className="page-bottom-parent">
        <div className="page-bottom">
          <div className="heading-2-recommended-egift-wrapper">
            <h1 className="heading-2">Recommended eGift Cards</h1>
          </div>
          <div className="tablist">
            <div className="recommended-tab-container">
              <div className="tab">
                <div className="recommended">Recommended</div>
              </div>
              <div className="horizontal-divider" />
            </div>
            <div className="how-to-use-tab">
              <div className="how-to-use">How to Use</div>
            </div>
          </div>
        </div>
        <div className="card-gallery">
          <div className="container">
            <img
              className="b8f0cc5-e47f-4879-9ad9-af344de-icon"
              loading="lazy"
              alt=""
              src="/9b8f0cc5e47f48799ad9af344de0481ajpg@2x.png"
            />
            <div className="link-heading">Noon</div>
          </div>
          <div className="container1">
            <img
              className="feb96f9c-00a8-4b46-8fd1-0faf50-icon"
              loading="lazy"
              alt=""
              src="/feb96f9c00a84b468fd10faf5086edcapng@2x.png"
            />
            <a
              className="link-heading1"
              href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-2362"
              target="_blank"
            >
              HappyYOU Card
            </a>
          </div>
          <div className="container2">
            <img
              className="d15528a2-6ec1-4ecd-9bef-f81877-icon"
              rows={9}
              cols={15}
              alt=""
              src="/d15528a26ec14ecd9beff8187792a6ddpng@2x.png"
            />
            <div className="link-heading2">{`Mall of the Emirates & City Centre`}</div>
          </div>
          <div className="container3">
            <img
              className="c6c37-a650-4bad-9515-a032e09a4-icon"
              loading="lazy"
              alt=""
              src="/545c6c37a6504bad9515a032e09a4039png@2x.png"
            />
            <div className="link-heading3">HappyYOU Well Done Card</div>
          </div>
        </div>
      </section>
      <FrameComponent10 />
      <Footer
        a542439cB0759ce64c518a9="/08723276a542439cb0759ce64c518a9bpng@2x.png"
        a69d915737324139B56aD6e33="/a69d915737324139b56ad6e339fd8052png@2x.png"
        edfaa2195d5240f5918fB94c7="/edfaa2195d5240f5918fb94c7d38eec4png@2x.png"
        d933dc4be64a83A0155628572="/67d933dc4be64a83a0155628572f311fpng@2x.png"
        c6883Dea44b05B3ab70a11800="/709c6883dea44b05b3ab70a11800b58cpng@2x.png"
        c384a9210604b7fAe23Dab0cf="/2c384a9210604b7fae23dab0cf246a2apng@2x.png"
        e7c5a5d4a72975481cc7c265d="/56112e7c5a5d4a72975481cc7c265d7apng@2x.png"
        a12ff94Daca4434Bddb4645d7="/6a12ff94daca4434bddb4645d7cc4819png@2x.png"
        db028290f664224A68e08b993="/2db028290f664224a68e08b9930b707fpng@2x.png"
        linkE364f0114cc74e8aBca9A="/link--e364f0114cc74e8abca9a8896c1c5030png@2x.png"
        linkF3b1db0fEb9f4b0a89f74="/link--f3b1db0feb9f4b0a89f74d955239e7a2png@2x.png"
      />
    </div>
  );
};

export default ProductDescriptionPage;
