// @flow

import { call, put } from 'redux-saga/effects';
import { pathOr } from 'ramda';
import PersonnelActions from '../Redux/PersonnelRedux';
import { transformUsers } from '../Services/Helper';

export default function* getAppliedPersonnel(api: Function): Generator<any, any, any> {
  const response = yield call(api.getUsers);

  if (response.ok) {
    const users = pathOr([], ['data', 'results'])(response);
    const personnel = transformUsers(users).map((item, index) => ({ ...item, id: index }));

    yield put(PersonnelActions.personnelFetchSuccess(personnel));
  } else {
    yield put(PersonnelActions.personnelFetchFailure());
  }
}
