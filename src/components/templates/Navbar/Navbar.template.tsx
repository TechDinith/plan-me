import { Link } from "react-router-dom";
import SignedInLinksTemplate from "./SignedInLinks.template";
import SignedOutLinksTemplate from "./SignedOutLinks.template";

const NavbarTemplate = () => {
  return (
    <nav className="nav wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          inPlan
        </Link>
        <SignedInLinksTemplate />
        <SignedOutLinksTemplate />
      </div>
    </nav>
  );
};

export default NavbarTemplate;
