export interface StaffReducerState {
  staff: null | { [uuid: string]: Staff };
}

export interface Staff {
  uuid: string;
  name: string;
  email: string;
}
