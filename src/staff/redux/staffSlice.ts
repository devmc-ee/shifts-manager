import { createSlice } from '@reduxjs/toolkit';
import { StaffReducerState } from './StaffReducerState.d';
import { v4 as uuidv4 } from 'uuid';
const initialState: StaffReducerState = {
  staff: null,
};

export const staffSlice = createSlice({
  name: 'staffSlice',
  initialState,
  reducers: {
    STAFF_CREATED: (state, action) => {
      const staff = action.payload;
      const uuid = uuidv4();

      const staffData = {
        ...staff,
        uuid,
      };

      if (state.staff) {
        state.staff[uuid] = staffData;
      } else {
        state.staff = {
          [uuid]: staffData,
        };
      }
    },
  },
});

export const { STAFF_CREATED: createStaff } = staffSlice.actions;
export const staffReducer = staffSlice.reducer;
