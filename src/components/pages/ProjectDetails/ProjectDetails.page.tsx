import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../_redux/hooks";
import firebaseConfig from "../../../_redux/firebase-store-auth/firebase.config";
const ProjectDetailsPage = () => {
  const { auth } = firebaseConfig;
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) navigate("/signin");
  });

  const params = useParams();
  const projects = useAppSelector((state) =>
    state.projects.projects.filter((project) => project.id === params.id)
  );
  console.log("projects", projects);

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        {projects &&
          projects.map((project) => (
            <div key={project.id}>
              <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                <div>Posted by the net ninja</div>
                <div>2nd September, 2am</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
