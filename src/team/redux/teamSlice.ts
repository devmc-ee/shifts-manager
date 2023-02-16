import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import { TeamReducerState } from './TeamReducerState';
import { v4 as uuidv4 } from 'uuid';
const initialState: TeamReducerState = {
  team: null,
};

export const teamSlice = createSlice({
  name: 'teamSlice',
  initialState,
  reducers: {
    TEAM_CREATED: (state, action) => {
      const team = action.payload;
      const uuid = uuidv4();

      const teamData = {
        ...team,
        uuid,
      };

      if (state.team) {
        state.team[uuid] = teamData;
      } else {
        state.team = {
          [uuid]: teamData,
        };
      }
    },
  },
});

export const { TEAM_CREATED: createTeam } = teamSlice.actions;
export const teamReducer = teamSlice.reducer;
