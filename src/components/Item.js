import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Item.css";

const Item = ({
  className = "",
  googlepng,
  greatVariety,
  aGreatVarietyOfOptionsAnd,
  fromEmmaWatson,
  propLeft,
  propTop,
}) => {
  const itemStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`item1 ${className}`} style={itemStyle}>
      <img className="googlepng-icon1" alt="" src={googlepng} />
      <div className="starsvg-group">
        <img className="starsvg-icon9" alt="" src="/starsvg.svg" />
        <img className="starsvg-icon10" alt="" src="/starsvg.svg" />
        <img className="starsvg-icon11" alt="" src="/starsvg.svg" />
        <img className="starsvg-icon12" alt="" src="/starsvg.svg" />
        <img className="starsvg-icon13" alt="" src="/starsvg.svg" />
      </div>
      <div className="heading-5-wrapper">
        <div className="heading-52">
          <div className="great-variety">{greatVariety}</div>
        </div>
      </div>
      <div className="a-great-variety-of-options-and-wrapper">
        <div className="a-great-variety">{aGreatVarietyOfOptionsAnd}</div>
      </div>
      <div className="from-emma-watson-parent">
        <div className="from-emma-watson">{fromEmmaWatson}</div>
        <div className="link-see1">See it on Google</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  googlepng: PropTypes.string,
  greatVariety: PropTypes.string,
  aGreatVarietyOfOptionsAnd: PropTypes.string,
  fromEmmaWatson: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Item;
