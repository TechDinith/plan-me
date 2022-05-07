import { ChangeEvent, FormEvent, useState } from "react";

const SignInPage = () => {
  interface iUser {
    email: string;
    password: string;
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
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
        <h5 className="grey-text text-darken-3">SignIn</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
