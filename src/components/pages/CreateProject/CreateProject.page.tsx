import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../_redux/hooks";
import { createProjectRed } from "../../../_redux/inPlanSlice";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../../../_redux/firebase-store-auth/firebase.config";
import { useEffect } from "react";

const CreateProjectPage = () => {
  const dispatch = useAppDispatch();

  const { auth } = firebaseConfig;
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) navigate("/signin");
  });

  const { register, handleSubmit } = useForm();
  let count = 0;

  const onSubmit = (data: { [x: string]: any }) => {
    count++;
    if (count === 1) {
      const project = {
        projects: [
          {
            id: Math.random().toString(),
            title: data.title,
            content: data.content,
          },
        ],
      };

      dispatch(createProjectRed(project));
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit((data) => onSubmit(data))} className="white">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" {...register("title")} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            className="materialize-textarea"
            id="content"
            {...register("content")}
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
