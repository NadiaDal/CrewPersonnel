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
    width: '300px',
    maxWidth: '100%',
    backgroundColor: 'rgba(241, 241, 241, 0.8)',
    padding: '10px',
    margin: '10px',
    wordBreak: 'break-all',
    borderRadius: '7px',
  },
};

export default SearchInput;
