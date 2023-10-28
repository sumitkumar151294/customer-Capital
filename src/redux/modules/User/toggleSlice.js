import { createSlice } from '@reduxjs/toolkit';

export const toogleSlice = createSlice({
  name: 'toogle',
  initialState: {
    isOpen: false, // Initial state of the toogle
  },
  reducers: {
    toggleNavbar: (state) => {
      return { ...state, isOpen: !state.isOpen };
    }
  },
});

export const { toggleNavbar } = toogleSlice.actions;

export default toogleSlice.reducer;
