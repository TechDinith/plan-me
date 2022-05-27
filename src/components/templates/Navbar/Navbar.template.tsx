import { Link } from "react-router-dom";
import SignedInLinksTemplate from "./SignedInLinks.template";
import SignedOutLinksTemplate from "./SignedOutLinks.template";
import { userObserver } from "../../../_redux/firebase-store-auth/auth/firebaseAuth";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const NavbarTemplate = () => {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("user", user);
        setIsUser(true);
      } else {
        console.log("Sign out");
        setIsUser(false);
      }
    });

    console.log("isUser", isUser);
  }, [isUser]);

  return (
    <nav className="nav wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MyPlan
        </Link>
        {isUser ? <SignedInLinksTemplate /> : <SignedOutLinksTemplate />}
      </div>
    </nav>
  );
};

export default NavbarTemplate;
