import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../../../_redux/firebase-store-auth/firebase.config";
import { useAppDispatch } from "../../../_redux/hooks";
import { sagaNotifierRed, setProjectsRed } from "../../../_redux/inPlanSlice";
import { store } from "../../../_redux/store";
import ProjectListOrg from "../../organizms/ProjectList/ProjectList.organizm";
import Notifications from "../../templates/Notifications/Notification.template";

const DashboardPage = () => {
  const dispatch = useAppDispatch();

  // dispatch(sagaNotifierRed());

  const [projects, setProjects] = useState([
    { id: "", title: "", content: "" },
  ]);

  const { db, auth } = firebaseConfig;

  useEffect(() => {
    if (!auth.currentUser) navigate("/signin");

    getProjects().then((project) => {
      const newProjects = project!.map((newProject) => {
        return {
          id: newProject.id,
          title: newProject.title,
          content: newProject.content,
        };
      });

      setProjects(newProjects);
    });
  }, [auth.currentUser]);

  const navigate = useNavigate();

  let count = 0;
  const getProjects = async () => {
    count++;
    if (count === 1) {
      const projectsCol = collection(db, "projects");
      const projectSnapshot = await getDocs(projectsCol);
      const projectList = projectSnapshot.docs.map((doc) => {
        return { id: doc.id, data: doc.data() };
      });
      const mappedProjects = projectList.map((project) => {
        return {
          id: project.id,
          content: project.data.content as string,
          title: project.data.title as string,
        };
      });
      //getting stored redux state
      const storedProjects = store.getState().projects.projects;

      //getting ids to a array
      const idsProject = storedProjects.map((project) => project.id);

      //chek whether the ids presents in the array we getting from firebase

      let isPresent = false;
      try {
        mappedProjects.forEach((project) => {
          if (idsProject.includes(project.id)) {
            isPresent = true;
            throw "No need of looping through";
          }
        });
      } catch (exception) {
        console.log("exception", exception);
      }

      if (!isPresent)
        store.dispatch(setProjectsRed({ projects: mappedProjects }));
      return mappedProjects;
    }
  };

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          {projects && (
            <ProjectListOrg
              key={projects.forEach((project) => project.id)}
              projects={projects}
            />
          )}
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
