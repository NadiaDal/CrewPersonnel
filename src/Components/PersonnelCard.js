// @flow

import React from 'react';
import { all, isEmpty, keys, pipe } from 'ramda';

export type PersonnelType = {
  id: number,
  name: string,
  email: string,
  picture: string,
  location: string,
  category: string,
};

export type PersonnelCardType = {
  search: Object,
  person: PersonnelType,
  children: any,
};

const isSubStringByProp = ({
  prop,
  item,
  search,
}: {
  prop: string,
  item: PersonnelType,
  search: { name: string, location: string },
}) => {
  if (isEmpty(search[prop])) return true;
  return item[prop].toLowerCase().indexOf(search[prop].toLowerCase()) !== -1;
};

export const isVisibleBySearch = (item: PersonnelType, search: { name: string, location: string }) =>
  pipe(
    keys,
    all(prop => isSubStringByProp({ prop, item, search })),
  )(search);

const PersonnelCard = ({ person, search, children }: PersonnelCardType) => {
  const { name, email, picture, location } = person;
  const isVisible = isVisibleBySearch(person, search);

  return isVisible ? (
    <div style={styles.container}>
      <div style={styles.image}>
        <img src={picture} alt="" />
      </div>
      <div style={styles.name}>{name}</div>
      <div style={styles.text}>{location}</div>
      <div style={styles.text}>{email}</div>
      <div style={styles.buttonContainer}>{children}</div>
    </div>
  ) : null;
};

const styles = {
  container: {
    backgroundColor: '#f1f1f1',
    padding: '10px',
    margin: '10px',
    wordBreak: 'break-all',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    overflow: 'hidden',
  },
  name: {},
  text: {},
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default PersonnelCard;
