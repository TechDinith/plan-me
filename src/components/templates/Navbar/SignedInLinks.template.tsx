import { NavLink } from "react-router-dom";

const SignedInLinksTemplate = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">LogOut</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1"></NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinksTemplate;
