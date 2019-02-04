// @flow

import { call, put, select } from 'redux-saga/effects';
import { pathOr } from 'ramda';
import PersonnelActions from '../Redux/PersonnelRedux';
import { transformUsers } from '../Services/Helper';
import Storage from '../Services/Storage';

export function* getAppliedPersonnel(api: Function): Generator<any, any, any> {
  const response = yield call(api.getUsers);

  if (response.ok) {
    const users = pathOr([], ['data', 'results'])(response);
    const personnel = transformUsers(users).map((item, index) => ({ ...item, id: index }));

    yield put(PersonnelActions.personnelFetchSuccess(personnel));
  } else {
    yield put(PersonnelActions.personnelFetchFailure());
  }
}

export function* saveSearchToLocalStorage(): Generator<any, any, any> {
  try {
    const search = yield select(state => state.personnelData.search);

    yield call(Storage.saveSearch, search);
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
  }
}
