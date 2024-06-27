import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent9 from "../components/FrameComponent9";
import Item from "../components/Item";
import Item1 from "../components/Item1";
import Item2 from "../components/Item2";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <FrameComponent2 />
      <FrameComponent3 />
      <div className="single-brand-cards-container">
        <FrameComponent1 />
        <FrameComponent4 />
      </div>
      <FrameComponent5 />
      <FrameComponent6 />
      <FrameComponent7 />
      <div className="background-wrapper">
        <div className="background">
          <div className="heading-5">Choose Your Card</div>
          <div className="browse-our-extensive">
            Browse our extensive collection of gift cards from top brands and
            select the perfect one for your needs.
          </div>
        </div>
      </div>
      <FrameComponent8 />
      <FrameComponent9 />
      <div className="google-review-container">
        <div className="testimonial-slider">
          <div className="item">
            <div className="first-review">
              <div className="google-play-icon-container">
                <img
                  className="googlepng-icon"
                  alt=""
                  src="/googlepng@2x.png"
                />
                <div className="testimonial-stars-container">
                  <img className="starsvg-icon" alt="" src="/starsvg.svg" />
                  <img className="starsvg-icon1" alt="" src="/starsvg.svg" />
                  <img className="starsvg-icon2" alt="" src="/starsvg.svg" />
                  <img className="starsvg-icon3" alt="" src="/starsvg.svg" />
                  <img className="starsvg-icon4" alt="" src="/starsvg.svg" />
                </div>
              </div>
              <div className="super-easy-to-use-parent">
                <div className="super-easy-to">Super easy to use!</div>
                <div className="the-process-was">
                  The process was so simple and the recipient loved the gift
                  card! I was in a bind looking for a last-minute gift, and
                  [Your Company Name] came through perfectly. The customization
                  options allowed me to add a personal message, making the gift
                  even more special. Highly recommend
                </div>
              </div>
              <div className="testimonial-author">
                <div className="from-mona-khan">From: Mona Khan</div>
                <div className="link-see">See it on Google</div>
              </div>
            </div>
          </div>
          <Item
            googlepng="/googlepng@2x.png"
            greatVariety="Great Variety"
            aGreatVarietyOfOptionsAnd="A great variety of options and fast delivery. I was impressed with how many different gift cards were available, from retail to dining and even travel. The customization feature is fantastic and really adds a personal touch. The whole process was smooth, and the gift card was delivered instantly to my friend's email. Will definitely use this service again for future gifts."
            fromEmmaWatson="From: Emma Watson"
          />
          <Item
            googlepng="/googlepng@2x.png"
            greatVariety="Wonderful Service"
            aGreatVarietyOfOptionsAnd={`"Excellent customer service and a wide selection of gift cards. I had a few questions about the delivery options, and the customer service team was very responsive and helpful. My family and friends were thrilled with their gifts. Thank you, [Your Company Name], for making gifting so easy and enjoyable. I will be recommending this service to everyone I know.`}
            fromEmmaWatson="From:  Michael Lawson "
            propLeft="1129.3px"
            propTop="0px"
          />
          <Item1 />
          <Item
            googlepng="/googlepng@2x.png"
            greatVariety="Perfect gift option"
            aGreatVarietyOfOptionsAnd="Perfect for last-minute gifts. Very happy with my purchase. I found the website to be incredibly user-friendly, and the selection of gift cards was excellent. Scheduling the delivery for a specific date was very convenient, and the gift cards arrived exactly when I planned. This service has become my go-to for all my gifting needs!"
            fromEmmaWatson="From:  Emma Warren"
            propLeft="564.7px"
            propTop="553.1px"
          />
          <Item2 />
        </div>
        <div className="slider-control">
          <div className="background-parent">
            <div className="background1">
              <img
                className="arrow-rightsvg-icon"
                alt=""
                src="/arrowrightsvg.svg"
              />
            </div>
            <div className="background2">
              <img
                className="arrow-rightsvg-icon1"
                alt=""
                src="/arrowrightsvg.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundshadow-wrapper">
        <div className="backgroundshadow">
          <div className="subscription-content">
            <div className="get-notified-container">
              <span className="get-notified">{`Get Notified `}</span>
              <span className="span">{`| `}</span>
              <span className="new-brands">{`New Brands & Offers`}</span>
            </div>
          </div>
          <div className="form">
            <div className="email-icon-container">
              <img className="icon" alt="" src="/icon4.svg" />
            </div>
            <div className="email-input-container">
              <div className="input">
                <div className="enter-your-email">Enter your email</div>
              </div>
            </div>
            <div className="button">
              <div className="submit">Submit</div>
            </div>
          </div>
        </div>
      </div>
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

export default HomePage;
