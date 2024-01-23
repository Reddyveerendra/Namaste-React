import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
export const manger = createSlice({
  name: "name",
  initialState: {
    searchName: "",
  },
  reducers: {
    updateSearchName: (val) => {
      console.log(val);
      val;
    },
  },
});
export const { updateSearchName } = manger.actions;
