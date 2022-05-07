import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface InPlanState {
  projects: { id: string; title: string; content: string }[];
}

const initialState: InPlanState = {
  projects: [
    {
      id: "1",
      title: "something1",
      content: "content1",
    },
    {
      id: "2",
      title: "something2",
      content: "content2",
    },
    {
      id: "3",
      title: "something3",
      content: "content3",
    },
  ],
};

export const inPlanSlice = createSlice({
  name: "inplan",
  initialState,
  reducers: {
    authRed: (state) => {
      return state;
    },
  },
});

export const { authRed } = inPlanSlice.actions;

//selector that can use when useSelector can't
export const selectProject = (state: RootState) => state.inPlan.projects;

export default inPlanSlice.reducer;
