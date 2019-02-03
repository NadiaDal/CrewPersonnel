// @flow

import React from 'react';

type SearchInputType = {
  placeholder: string,
  search: string,
  handleChange: (value: string) => void,
};

const SearchInput = ({ placeholder, search, handleChange }: SearchInputType) => (
  <input
    type="text"
    placeholder={placeholder}
    value={search}
    onChange={({ target: { value } }) => handleChange(value)}
    style={styles.input}
  />
);

const styles = {
  input: {
    width: '100%',
    maxWidth: '300px',
  },
};

export default SearchInput;
