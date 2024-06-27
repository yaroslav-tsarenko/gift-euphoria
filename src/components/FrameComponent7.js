import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div className={`homepage-inner ${className}`}>
      <div className="heading-1-browse-by-categori-parent">
        <div className="heading-15">Browse By Categories</div>
        <div className="link-group">
          <div className="link11">
            <img
              className="b95c60b-b1e4-415f-b08e-2fbbbd2-icon"
              alt=""
              src="/0b95c60bb1e4415fb08e2fbbbd213510png@2x.png"
            />
            <div className="hypermarkets">Hypermarkets</div>
          </div>
          <div className="link12">
            <img
              className="b037d2be-acb4-4812-808c-750903-icon"
              alt=""
              src="/b037d2beacb44812808c750903f2f1fbpng@2x.png"
            />
            <div className="online-shopping">Online Shopping</div>
          </div>
          <div className="link13">
            <img
              className="b65-5dac-482d-ac53-2a54f41bde8-icon"
              alt=""
              src="/64311b655dac482dac532a54f41bde8bpng@2x.png"
            />
            <div className="fashion">Fashion</div>
          </div>
          <div className="link14">
            <img
              className="d7ddd52-967f-4589-8e11-63a9b72-icon"
              alt=""
              src="/2d7ddd52967f45898e1163a9b7217c7apng@2x.png"
            />
            <div className="electronics">Electronics</div>
          </div>
          <div className="link15">
            <img
              className="e94332-b1f8-47fd-9a64-583a3201-icon"
              alt=""
              src="/97e94332b1f847fd9a64583a3201d86cpng@2x.png"
            />
            <div className="home-garden">{`Home & Garden`}</div>
          </div>
          <div className="link16">
            <img
              className="e1f12a5c-10b2-4c51-951a-0790d6-icon"
              alt=""
              src="/e1f12a5c10b24c51951a0790d6690467png@2x.png"
            />
            <div className="shopping-malls">Shopping Malls</div>
          </div>
          <div className="link17">
            <img
              className="f90078f9-6c63-422b-a9a6-dd3630-icon"
              alt=""
              src="/f90078f96c63422ba9a6dd363016fba8png@2x.png"
            />
            <div className="jewellery">Jewellery</div>
          </div>
          <div className="link18">
            <img
              className="c11d5bc4-010e-48b0-9585-9653fb-icon"
              alt=""
              src="/c11d5bc4010e48b095859653fbee100cpng@2x.png"
            />
            <div className="gaming">Gaming</div>
          </div>
          <div className="link19">
            <img
              className="b277666a-e464-419f-ac57-ec2c7d-icon"
              alt=""
              src="/b277666ae464419fac57ec2c7d8d0081png@2x.png"
            />
            <div className="food-delivery">Food Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
