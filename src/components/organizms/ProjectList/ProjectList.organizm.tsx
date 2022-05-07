import { iProjects } from "../../../interfaces/InPlan.interface";
import ProjectSummaryMol from "../../molecules/ProjectSummery/ProjectSummery.molecules";

const ProjectListOrg = ({ projects }: iProjects) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project) => {
          return <ProjectSummaryMol {...project} key={project.id} />;
        })}
    </div>
  );
};

export default ProjectListOrg;
