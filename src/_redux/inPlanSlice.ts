import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ProjectState {
  projects: {
    id: string;
    title: string;
    content: string;
  }[];
}

const initialState: ProjectState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    createProjectRed: (
      { projects },
      { payload }: PayloadAction<ProjectState>
    ) => {
      void projects.push(payload.projects[0]);
    },
  },
});

// export const inPlanSlice = createSlice(
//   {
//   name: "inplan",
//   initialState,
//   reducers: {
//     createProjectRed: (
//       { projects },
//       { payload }: PayloadAction<InPlanState>
//     ) => {
//       projects = payload.projects;
//     },

//     authRed: (state) => {
//       return state;
//     },
//   },
// }
// );

export const { createProjectRed } = projectSlice.actions;

//selector that can use when useSelector can't
export const selectProject = (state: RootState) => state.projects.projects;

export default projectSlice.reducer;
