import { createSlice } from "@reduxjs/toolkit";

export type RootState = {
  data: number | null;
  error: boolean;
};

const initialState: RootState = {
  data: null,
  error: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setData: (state: RootState, { payload }: { payload: number }) => ({
      ...state,
      data: payload,
    }),
    setError: (state: RootState, { payload }: { payload: boolean }) => ({
      ...state,
      error: payload,
    }),
  },
});

export const { setData, setError } = mainSlice.actions;
