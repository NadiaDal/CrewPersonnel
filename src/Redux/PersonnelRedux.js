// @flow

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { assoc, update } from 'ramda';
import type { PersonnelType } from '../Components/PersonnelCard';

const { Types, Creators } = createActions({
  personnelFetch: null,
  personnelFetchSuccess: ['personnel'],
  personnelFetchFailure: null,
  personnelMoveTo: ['category', 'id'],
});

export const PersonnelTypes = Types;
export default Creators;

export const APPLIED = 'applied';
export const INTERVIEWING = 'interviewing';
export const HIRED = 'hired';

type PersonnelDataType = {
  personnel: Array<PersonnelType>,
  fetching: boolean,
  error: boolean,
  merge: Function,
};
export const INITIAL_STATE: PersonnelDataType = Immutable({
  personnel: [],
  fetching: false,
  error: false,
});

export const fetchApplied = (state: PersonnelDataType) => state.merge({ fetching: true });

export const fetchAppliedSuccess = (state: PersonnelDataType, { personnel }: { personnel: Array<PersonnelType> }) =>
  state.merge({ fetching: false, error: false, personnel });

export const fetchAppliedSuccessFailure = (state: PersonnelDataType) => state.merge({ fetching: false, error: true });

export const moveTo = (state: PersonnelDataType, { category, id }: { category: string, id: number }) => {
  const updatedValue = assoc('category', category, state.personnel[id]);

  return state.merge({ personnel: update(id, updatedValue, state.personnel) });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PERSONNEL_FETCH]: fetchApplied,
  [Types.PERSONNEL_FETCH_SUCCESS]: fetchAppliedSuccess,
  [Types.PERSONNEL_FETCH_FAILURE]: fetchAppliedSuccessFailure,
  [Types.PERSONNEL_MOVE_TO]: moveTo,
});
