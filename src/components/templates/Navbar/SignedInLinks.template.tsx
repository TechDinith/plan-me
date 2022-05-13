import { NavLink } from "react-router-dom";
import { logOut } from "../../../_redux/firebase-store-auth/auth/firebaseAuth";

const SignedInLinksTemplate = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={logOut}>LogOut</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1"></NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinksTemplate;
