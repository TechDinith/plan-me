import { takeEvery, call, select } from "redux-saga/effects";
import { store } from "../store";
import firebaseConfig from "../../auth/firebase.config";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { setProjectsRed } from "../inPlanSlice";

const { db } = firebaseConfig;

const createProject = async () => {
  //getting projects from redux
  const projects = store.getState().projects.projects;

  //getting latest project
  const newProject = [...projects].pop();

  const projectsCol = collection(db, "projects");
  const docRef = await addDoc(projectsCol, {
    authorFirstName: "Red",
    authorLastName: "Morgen",
    content: newProject!.content,
    title: newProject!.title,
  });

  console.log("Document written wit ID: ", docRef.id);
};

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
        content: project.data.content,
        title: project.data.title,
      };
    });
    store.dispatch(setProjectsRed({ projects: mappedProjects }));
  }
};

function* createProjectWorker(): any {
  try {
    yield call(createProject);
  } catch (error) {
    console.log(`error`, error);
  }
}

function* getProjectWorker(): any {
  try {
    yield call(getProjects);
  } catch (error) {
    console.log(`error`, error);
  }
}

function* watchProject() {
  try {
    yield takeEvery("projects/createProjectRed", createProjectWorker);
    yield takeEvery("projects/sagaNotifierRed", getProjectWorker);
  } catch (error) {
    console.log(`error`, error);
  }
}

export default watchProject;
