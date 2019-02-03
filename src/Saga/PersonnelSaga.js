// @flow

import { call, put } from 'redux-saga/effects';
import { pipe, path, pick, map, evolve, values, join, assoc } from 'ramda';
import PersonnelActions, { APPLIED } from '../Redux/PersonnelRedux';

const capitalize = (str: string): string =>
  str
    .charAt(0)
    .toUpperCase()
    .concat(str.slice(1).toLowerCase());

const transformName = pipe(
  values,
  map(capitalize),
  join(' '),
);

const transformLocation = pipe(
  path(['city']),
  capitalize,
);

const transformUser = pipe(
  path(['data', 'results']),
  map(
    pipe(
      pick(['name', 'email', 'picture', 'location']),
      assoc('category', APPLIED),
      evolve({
        name: transformName,
        picture: path(['medium']),
        location: transformLocation,
      }),
    ),
  ),
);

export default function* getAppliedPersonnel(api: Function): Generator<any, any, any> {
  const response = yield call(api.getUsers);

  if (response.ok) {
    const personnel = transformUser(response).map((item, index) => ({ ...item, id: index }));

    yield put(PersonnelActions.personnelFetchSuccess(personnel));
  } else {
    yield put(PersonnelActions.personnelFetchFailure());
  }
}
