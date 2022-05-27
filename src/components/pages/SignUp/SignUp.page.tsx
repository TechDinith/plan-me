import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../../../_redux/firebase-store-auth/firebase.config";

const SignUpPage = () => {
  const { auth } = firebaseConfig;
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) navigate("/");
  });

  interface iUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (event: ChangeEvent) => {
    setUser({
      ...user,
      [event.target.id]: (event.target as HTMLInputElement).value,
    } as iUser);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    /**
     * todo:
     * develop
     */
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">SignUp</h5>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
