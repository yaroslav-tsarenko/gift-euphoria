import FrameComponent2 from "../components/FrameComponent2";
import DashboardContent from "../components/DashboardContent";
import Footer from "../components/Footer";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <FrameComponent2 />
      <DashboardContent />
      <Footer />
    </div>
  );
};

export default AccountPage;
