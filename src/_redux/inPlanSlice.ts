import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ProjectState {
  projects: {
    id: string;
    title: string;
    content: string;
  }[];
}

export interface UserState {
  user: {
    email: string;
    password: string;
  }[];
}

export const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
  } as ProjectState,
  reducers: {
    createProjectRed: (
      { projects },
      { payload }: PayloadAction<ProjectState>
    ) => {
      void projects.push(payload.projects[0]);
    },
    sagaNotifierRed: () => {
      console.log("Saga Notifier!");
    },
    setProjectsRed: (
      { projects },
      { payload }: PayloadAction<ProjectState>
    ) => {
      payload.projects.forEach((project) => {
        projects.push(project);
      });
    },
  },
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  } as UserState,
  reducers: {
    signInRed: ({ user }, { payload }: PayloadAction<UserState>) => {
      void user.push(payload.user[0]);
    },
  },
});

export const { createProjectRed, setProjectsRed, sagaNotifierRed } =
  projectSlice.actions;

export const { signInRed } = userSlice.actions;

export default {
  projectSlice: projectSlice.reducer,
  userSlice: userSlice.reducer,
};
