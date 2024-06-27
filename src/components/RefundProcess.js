import PropTypes from "prop-types";
import "./RefundProcess.css";

const RefundProcess = ({
  className = "",
  refundRequestProcess,
  toRequestARefundContactOu,
  aDetailedExplanationOfThe,
  reviewAndProcessing,
  ourCustomerSupportTeamWil,
  approvedRefunds,
  ifYourRefundRequestIsAppr,
}) => {
  return (
    <div className={`refund-process ${className}`}>
      <h1 className="refund-request-process-container">
        <ol className="refund-request-process">
          <li>{refundRequestProcess}</li>
        </ol>
      </h1>
      <div className="process-steps">
        <div className="steps">
          <h3 className="contact-customer-support">
            3.1 Contact Customer Support
          </h3>
          <div className="to-request-a-container">
            <p className="to-request-a">{toRequestARefundContactOu}</p>
            <p className="blank-line3">&nbsp;</p>
            <ul className="your-name-and-contact-informat">
              <li className="your-name-and">
                Your name and contact information
              </li>
              <li className="the-gift-card">
                The gift card number and purchase details
              </li>
              <li>{aDetailedExplanationOfThe}</li>
            </ul>
          </div>
        </div>
        <div className="steps1">
          <h3 className="review-and-processing">{reviewAndProcessing}</h3>
          <div className="our-customer-support">
            {ourCustomerSupportTeamWil}
          </div>
        </div>
        <div className="steps2">
          <h3 className="approved-refunds">{approvedRefunds}</h3>
          <div className="if-your-refund">{ifYourRefundRequestIsAppr}</div>
        </div>
      </div>
    </div>
  );
};

RefundProcess.propTypes = {
  className: PropTypes.string,
  refundRequestProcess: PropTypes.string,
  toRequestARefundContactOu: PropTypes.string,
  aDetailedExplanationOfThe: PropTypes.string,
  reviewAndProcessing: PropTypes.string,
  ourCustomerSupportTeamWil: PropTypes.string,
  approvedRefunds: PropTypes.string,
  ifYourRefundRequestIsAppr: PropTypes.string,
};

export default RefundProcess;
