import { useParams } from "react-router-dom";

const ProjectDetailsPage = () => {
  const params = useParams();
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {params.id}</span>
          <p>Something</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the net ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
