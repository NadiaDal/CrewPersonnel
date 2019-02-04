import Immutable from 'seamless-immutable';
import { fetchApplied, fetchAppliedSuccess, fetchAppliedFailure } from '../PersonnelRedux';
import mock from '../../Services/Mock';

describe('fetchApplied suit', () => {
  it('should return the correct state if request is started', () => {
    const state = Immutable({
      personnel: [],
      fetching: false,
      error: true,
      search: { name: '', location: '' },
    });
    const updatedState = {
      personnel: [],
      fetching: true,
      error: true,
      search: { name: '', location: '' },
    };

    expect(fetchApplied(state)).toEqual(updatedState);
  });
});

describe('fetchAppliedFailure suit', () => {
  it('should return the correct state if request fail', () => {
    const state = Immutable({
      personnel: [],
      fetching: true,
      error: false,
      search: { name: '', location: '' },
    });
    const updatedState = {
      personnel: [],
      fetching: false,
      error: true,
      search: { name: '', location: '' },
    };

    expect(fetchAppliedFailure(state)).toEqual(updatedState);
  });
});

describe('fetchAppliedSuccess suit', () => {
  it('should return the correct state with valid data if', () => {
    const state = Immutable({
      personnel: [],
      fetching: true,
      error: false,
      search: { name: '', location: '' },
    });
    const updatedState = {
      personnel: mock.transformedUser,
      fetching: false,
      error: false,
      search: { name: '', location: '' },
    };

    expect(fetchAppliedSuccess(state, { personnel: mock.transformedUser })).toEqual(updatedState);
  });

  it('should return the correct state if data is null', () => {
    const state = Immutable({
      personnel: [],
      fetching: true,
      error: false,
      search: { name: '', location: '' },
    });
    const updatedState = {
      personnel: [],
      fetching: false,
      error: false,
      search: { name: '', location: '' },
    };

    expect(fetchAppliedSuccess(state, { personnel: null })).toEqual(updatedState);
  });
});
