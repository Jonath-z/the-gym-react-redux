import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "#ffffff" },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
