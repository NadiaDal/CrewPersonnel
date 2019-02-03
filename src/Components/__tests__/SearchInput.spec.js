import React from 'react';
import renderer from 'react-test-renderer';
import SearchInput from '../SearchInput';

it('search input by name renders correctly', () => {
  const placeholder = 'Search by name';
  const search = 'Bra';
  const identity = () => {};

  const tree = renderer
    .create(<SearchInput placeholder={placeholder} search={search} handleChange={identity} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('search input by location renders correctly', () => {
  const placeholder = 'Search by city';
  const search = 'Nottingham';
  const identity = () => {};

  const tree = renderer
    .create(<SearchInput placeholder={placeholder} search={search} handleChange={identity} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
