import { createSlice } from "@reduxjs/toolkit";

const MonthSlice = createSlice({
  name: "activeMonth",
  initialState: localStorage.getItem("month") ? parseInt(localStorage.getItem("month")) : 1,
  reducers: {
    getMonth: (state, action) => {
      return action.payload;
    },
  },
});

export const { getMonth } = MonthSlice.actions;
export default MonthSlice.reducer;
