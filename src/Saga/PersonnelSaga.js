// @flow

import { call, put } from 'redux-saga/effects';
import PersonnelActions from '../Redux/PersonnelRedux';
import { transformUser } from '../Services/Helper';

export default function* getAppliedPersonnel(api: Function): Generator<any, any, any> {
  const response = yield call(api.getUsers);

  if (response.ok) {
    const personnel = transformUser(response).map((item, index) => ({ ...item, id: index }));

    yield put(PersonnelActions.personnelFetchSuccess(personnel));
  } else {
    yield put(PersonnelActions.personnelFetchFailure());
  }
}
