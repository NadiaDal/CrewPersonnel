import { call, put } from 'redux-saga/effects';
import { pipe, path, pick, map, evolve, values, join, assoc } from 'ramda';
import PersonnelActions, { APPLIED } from '../Redux/PersonnelRedux';

const transformName = pipe(
  values,
  join(' '),
);

const transformUser = pipe(
  path(['data', 'results']),
  map(
    pipe(
      pick(['name', 'email', 'picture', 'location']),
      assoc('category', APPLIED),
      evolve({ name: transformName, picture: path(['medium']), location: path(['city']) }),
    ),
  ),
);

export default function* getAppliedPersonnel(api) {
  const response = yield call(api.getUsers);

  if (response.ok) {
    const personnel = transformUser(response).map((item, index) => ({ ...item, id: index }));

    yield put(PersonnelActions.personnelFetchSuccess(personnel));
  } else {
    yield put(PersonnelActions.personnelFetchFailure());
  }
}
