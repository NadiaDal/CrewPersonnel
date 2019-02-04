import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';

import { StartupTypes } from '../Redux/StartupRedux';
import { PersonnelTypes } from '../Redux/PersonnelRedux';

import startup from './StartupSaga';
import { getAppliedPersonnel, saveSearchToLocalStorage } from './PersonnelSaga';

const api = API.create();

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(PersonnelTypes.PERSONNEL_FETCH, getAppliedPersonnel, api),
    takeLatest(PersonnelTypes.PERSONNEL_SEARCH, saveSearchToLocalStorage),
  ]);
}
