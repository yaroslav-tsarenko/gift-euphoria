import Page from "../components/Page";
import ProductRow from "../components/ProductRow";
import CheckoutDetails from "../components/CheckoutDetails";
import Footer1 from "../components/Footer1";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <Page />
      <section className="cart-item">
        <div className="panorma-card-title">
          <ProductRow />
          <CheckoutDetails />
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default CartDetailsPage;
