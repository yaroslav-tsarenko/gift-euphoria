import Header1 from "../components/Header1";
import ContactForm from "../components/ContactForm";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <Header1 />
      <main className="footer-container-parent">
        <div className="footer-container">
          <div className="logo-parent">
            <div className="logo">
              <div className="logo-container">
                <div className="footer-logo-container">
                  <img
                    className="footer-logo-shape"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className="gift-euphoria">Gift Euphoria</div>
              </div>
            </div>
            <div className="footer-info">
              <img
                className="footer-info-child"
                loading="lazy"
                alt=""
                src="/frame-1000006877@2x.png"
              />
              <div className="footer-info-bottom">
                <div className="powered-by-wrapper">
                  <div className="powered-by">{`Powered by `}</div>
                </div>
                <div className="payment-icons-parent">
                  <img
                    className="payment-icons"
                    loading="lazy"
                    alt=""
                    src="/payment-icons@2x.png"
                  />
                  <div className="social-icons">
                    <img
                      className="social-icons-child"
                      loading="lazy"
                      alt=""
                      src="/vector-341.svg"
                    />
                  </div>
                  <div className="legal-link-items">
                    <div className="legal">Legal</div>
                  </div>
                  <div className="legal-link-items1">
                    <div className="refunds">Refunds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="rectangle-parent">
          <div className="frame-child" />
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default PaymentPage;
