import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Saga';
import { reducer as personnelData } from './PersonnelRedux';
// eslint-disable-next-line
import { reducers as nextRootReducer } from '.';

export const reducers = combineReducers({ personnelData });

export default () => {
  const configuredStore = configureStore(reducers, rootSaga);
  const { store, sagaMiddleware } = configuredStore;
  let { sagasManager } = configuredStore;

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(nextRootReducer);
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(rootSaga);
      });
    });
  }

  return store;
};
