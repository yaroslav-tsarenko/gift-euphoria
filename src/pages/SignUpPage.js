import Header1 from "../components/Header1";
import SignIn from "../components/SignIn";
import Footer from "../components/Footer";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <Header1 />
      <section className="signup-content-parent">
        <div className="signup-content">
          <SignIn />
        </div>
        <img
          className="background-shape-icon1"
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </section>
      <Footer />
    </div>
  );
};

export default SignUpPage;
