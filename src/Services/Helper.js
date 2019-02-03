// @flow

import { all, assoc, evolve, isEmpty, join, keys, map, path, pick, pipe, values } from 'ramda';
import { APPLIED } from '../Redux/PersonnelRedux';
import type { PersonnelType } from '../Components/PersonnelCard';

export const capitalize = (str: string): string =>
  str
    .charAt(0)
    .toUpperCase()
    .concat(str.slice(1).toLowerCase());

export const transformName = pipe(
  values,
  map(capitalize),
  join(' '),
);

export const transformLocation = pipe(
  path(['city']),
  capitalize,
);

export const transformUser = pipe(
  path(['data', 'results']),
  map(
    pipe(
      pick(['name', 'email', 'picture', 'location']),
      assoc('category', APPLIED),
      evolve({
        name: transformName,
        picture: path(['medium']),
        location: transformLocation,
      }),
    ),
  ),
);

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
