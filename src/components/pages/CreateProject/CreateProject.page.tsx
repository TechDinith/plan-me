import { ChangeEvent, FormEvent, useState } from "react";

const CreateProjectPage = () => {
  interface iUser {
    title: string;
    content: string;
  }

  const [user, setUser] = useState({
    title: "",
    content: "",
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
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            className="materialize-textarea"
            id="content"
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectPage;
