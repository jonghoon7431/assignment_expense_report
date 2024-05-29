import { configureStore } from "@reduxjs/toolkit";
import MonthSlice from "../slices/MonthSlice";
import formSlice from "../slices/formSlice";

const store = configureStore({
  reducer: {
    data: formSlice,
    activeMonth: MonthSlice,
  },
});

export default store;
