import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../slices/formSlice";

const store = configureStore({
  reducer: {
    data: formSlice,
  },
});

export default store;
