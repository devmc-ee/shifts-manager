export interface TeamReducerState {
  team: null | { [uuid: string]: Team };
}

export interface Team {
  uuid: string;
  name: string;
  email: string;
}
