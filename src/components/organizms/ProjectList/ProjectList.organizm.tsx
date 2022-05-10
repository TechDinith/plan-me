import { Link } from "react-router-dom";
import { iProjects } from "../../../interfaces/InPlan.interface";
import ProjectSummaryMol from "../../molecules/ProjectSummery/ProjectSummery.molecules";

const ProjectListOrg = ({ projects }: any) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project: any) => {
          return (
            <Link to={"/projects/" + project.id}>
              <ProjectSummaryMol {...project} key={project.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectListOrg;
