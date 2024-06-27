import PropTypes from "prop-types";
import "./Item2.css";

const Item2 = ({ className = "" }) => {
  return (
    <div className={`item3 ${className}`}>
      <img className="googlepng-icon3" alt="" src="/googlepng@2x.png" />
      <div className="frame-parent2">
        <div className="starsvg-parent1">
          <img className="starsvg-icon19" alt="" src="/starsvg.svg" />
          <img className="starsvg-icon20" alt="" src="/starsvg.svg" />
          <img className="starsvg-icon21" alt="" src="/starsvg.svg" />
          <img className="starsvg-icon22" alt="" src="/starsvg.svg" />
          <img className="starsvg-icon23" alt="" src="/starsvg.svg" />
        </div>
        <div className="heading-54">
          <div className="good-and-prompt">Good and prompt</div>
        </div>
      </div>
      <div className="i-was-amazed">
        I was amazed at how easy it was to find the perfect gift card for my
        friend’s birthday. The selection is vast, and I appreciated being able
        to add a personalized video message. My friend was thrilled and
        mentioned how thoughtful the gift felt. The delivery was prompt and
        right on time. [Your Company Name] has made gift-giving stress-free and
        enjoyable. I’ll definitely be back for more!
      </div>
      <div className="from-lisa-kudro-parent">
        <div className="from-lisa-kudro">From: Lisa Kudro</div>
        <div className="link-see3">See it on Google</div>
      </div>
    </div>
  );
};

Item2.propTypes = {
  className: PropTypes.string,
};

export default Item2;
