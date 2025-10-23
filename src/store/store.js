import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./educationSlice";   
import experienceReducer from "./experienceSlice";   
import workReducer from "./workSlice";    

export const store = configureStore({
  reducer: {
    education: educationReducer,
    experience : experienceReducer,
    work: workReducer,
  },
});
