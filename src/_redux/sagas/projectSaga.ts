import { takeEvery, call, select } from "redux-saga/effects";
import { store } from "../store";
import firebaseConfig from "../../auth/firebase.config";
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
} from "firebase/firestore/lite";

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

const getProjects = async () => {
  const projectsCol = collection(db, "projects");
  const projectSnapshot = await getDocs(projectsCol);
  const projectList = projectSnapshot.docs.map((doc) => doc.data());
  console.log("projectList", projectList);
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
    // yield takeEvery("admin/favoriteRed", getProjectWorker);
  } catch (error) {
    console.log(`error`, error);
  }
}

export default watchProject;
