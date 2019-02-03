import { put } from 'redux-saga/effects';
import PersonnelActions from '../Redux/PersonnelRedux';

export default function* startup() {
  try {
    yield put(PersonnelActions.personnelFetch());
  } catch (error) {
    console.error(error);
  }
}
