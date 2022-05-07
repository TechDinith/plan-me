import { iProject } from "../../../interfaces/InPlan.interface";

const ProjectSummaryMol = (project: iProject) => {
  return (
    <div className="card zed-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">3rd September,2am</p>
      </div>
    </div>
  );
};

export default ProjectSummaryMol;
