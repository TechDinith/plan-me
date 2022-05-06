import ProjectListOrg from "../../organizms/ProjectList/ProjectList.organizm";
import Notifications from "../../templates/Notifications/Notification.template";

const DashboardPage = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectListOrg />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
