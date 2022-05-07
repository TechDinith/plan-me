import { useAppSelector } from "../../../_redux/hooks";
import ProjectListOrg from "../../organizms/ProjectList/ProjectList.organizm";
import Notifications from "../../templates/Notifications/Notification.template";

const DashboardPage = () => {
  const projects = useAppSelector(({ inPlan }) => inPlan.projects);

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectListOrg projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
