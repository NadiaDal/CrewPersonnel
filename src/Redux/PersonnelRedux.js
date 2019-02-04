// @flow

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { assoc, update, isNil } from 'ramda';

const { Types, Creators } = createActions({
  personnelFetch: null,
  personnelFetchSuccess: ['personnel'],
  personnelFetchFailure: null,
  personnelMoveTo: ['category', 'id'],
  personnelSearch: ['search'],
});

export const PersonnelTypes = Types;
export default Creators;

export const APPLIED = 'applied';
export const INTERVIEWING = 'interviewing';
export const HIRED = 'hired';

type categoryType = 'applied' | 'interviewing' | 'hired';

export type PersonnelType = {
  id: number,
  name: string,
  email: string,
  picture: string,
  location: string,
  category: categoryType,
};

export type SearchType = { name: string, location: string };

type PersonnelDataType = {
  personnel: Array<PersonnelType>,
  fetching: boolean,
  error: boolean,
  search: SearchType,
  merge: Function,
};
export const INITIAL_STATE: PersonnelDataType = Immutable({
  personnel: [],
  fetching: false,
  error: false,
  search: { name: '', location: '' },
});

export const fetchApplied = (state: PersonnelDataType) => state.merge({ fetching: true });

export const fetchAppliedSuccess = (state: PersonnelDataType, { personnel }: { personnel: Array<PersonnelType> }) => {
  if (isNil(personnel)) return state.merge({ fetching: false, error: false });

  return state.merge({ fetching: false, error: false, personnel });
};

export const fetchAppliedFailure = (state: PersonnelDataType) => state.merge({ fetching: false, error: true });

export const moveTo = (state: PersonnelDataType, { category, id }: { category: string, id: number }) => {
  const updatedValue = assoc('category', category, state.personnel[id]);

  return state.merge({ personnel: update(id, updatedValue, state.personnel) });
};

export const searchText = (state: PersonnelDataType, { search }: { search: { [string]: string } }) =>
  state.merge({ search: { ...state.search, ...search } });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PERSONNEL_FETCH]: fetchApplied,
  [Types.PERSONNEL_FETCH_SUCCESS]: fetchAppliedSuccess,
  [Types.PERSONNEL_FETCH_FAILURE]: fetchAppliedFailure,
  [Types.PERSONNEL_MOVE_TO]: moveTo,
  [Types.PERSONNEL_SEARCH]: searchText,
});
