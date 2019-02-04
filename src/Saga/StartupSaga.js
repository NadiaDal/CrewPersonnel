import { call, put } from 'redux-saga/effects';
import PersonnelActions from '../Redux/PersonnelRedux';
import Storage from '../Services/Storage';

export default function* startup() {
  try {
    const search = yield call(Storage.getSearch);

    yield put(PersonnelActions.personnelSearch(search));
    yield put(PersonnelActions.personnelFetch());
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}
