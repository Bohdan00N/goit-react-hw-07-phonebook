import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,

  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;