import { createSlice } from "@reduxjs/toolkit";

// -------------------------------------
// Store
// -------------------------------------

export const reducerName = "settings";
export const initialState = {
  enableLogs: false,

  refetchOnMountOrArgChange: true,
};
export const settingsSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    cleanSettings: () => initialState,
    enableLogs: (state) => {
      state.enableLogs = true;
    },
    setSettings: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

// -------------------------------------
// Selectors
// -------------------------------------

// -------------------------------------
// Exports
// -------------------------------------

export const { cleanSettings, enableLogs, setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
