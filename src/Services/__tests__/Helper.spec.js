import { formatter, transformLocation, transformUsers, isSubStringByProp, isVisibleBySearch } from '../Helper';
import mock from '../Mock';

describe('formatter suite', () => {
  it('should capitalize', () => {
    expect(formatter('something')).toBe('Something');
  });

  it('should work if only one letter', () => {
    expect(formatter('d')).toBe('D');
  });

  it('should work with empty string', () => {
    expect(formatter('')).toBe('');
  });

  it('should format tail', () => {
    expect(formatter('sOmEtHiNg')).toBe('Something');
  });

  it('should not format non letters', () => {
    expect(formatter('$OmEtHiNg')).toBe('$omething');
  });
});

describe('transformLocation suite', () => {
  it('should work with valid location', () => {
    expect(transformLocation(mock.location)).toBe('Worcester');
  });

  it('should work with location empty object', () => {
    const location = {};

    expect(transformLocation(location)).toBe('');
  });

  it('should work with location null', () => {
    const location = null;

    expect(transformLocation(location)).toBe('');
  });

  it('should work with location undefined', () => {
    const location = undefined;

    expect(transformLocation(location)).toBe('');
  });
});

describe('transformUsers suite', () => {
  it('should work with valid array of users', () => {
    expect(transformUsers(mock.notTransformedUser)).toEqual(mock.transformedUser);
  });

  it('should work with empty array of users', () => {
    expect(transformUsers([])).toEqual([]);
  });

  it('should work with empty array of users', () => {
    expect(transformUsers([{}, {}])).toEqual([]);
  });

  it('should work with null array of users', () => {
    expect(transformUsers([null, null])).toEqual([]);
  });
});

describe('isSubStringByProp suite', () => {
  it('', () => {
    const data = {
      prop: 'name',
      item: mock.transformedUser[0],
      search: { name: 'Ka', location: '' },
    };

    expect(isSubStringByProp(data)).toBeFalsy();
  });

  it('', () => {
    const data = {
      prop: 'location',
      item: mock.transformedUser[0],
      search: { name: 'Ka', location: '' },
    };

    expect(isSubStringByProp(data)).toBeTruthy();
  });
});

describe('isVisibleBySearch suite', () => {
  it('should be true', () => {
    const data = { item: mock.transformedUser[0], search: { name: '', location: '' } };

    expect(isVisibleBySearch(data.item, data.search)).toBeTruthy();
  });

  it('should be true', () => {
    const data = {
      item: mock.transformedUser[0],
      search: { name: 'Dave', location: '' },
    };

    expect(isVisibleBySearch(data.item, data.search)).toBeTruthy();
  });

  it('should be true', () => {
    const data = {
      item: mock.transformedUser[0],
      search: { name: 'Dave', location: 'Worces' },
    };

    expect(isVisibleBySearch(data.item, data.search)).toBeTruthy();
  });

  it('should be false with wrong name and empty location', () => {
    const data = {
      item: mock.transformedUser[0],
      search: { name: 'Ka', location: '' },
    };

    expect(isVisibleBySearch(data.item, data.search)).toBeFalsy();
  });

  it('should be false with wrong name and correct location', () => {
    const data = {
      item: mock.transformedUser[0],
      search: { name: 'Ka', location: 'Worcester' },
    };

    expect(isVisibleBySearch(data.item, data.search)).toBeFalsy();
  });

  it('should be false with correct name and wrong city', () => {
    const data = {
      item: mock.transformedUser[0],
      search: { name: 'Dave', location: 'Newcastle' },
    };

    expect(isVisibleBySearch(data.item, data.search)).toBeFalsy();
  });
});
