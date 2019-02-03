// @flow

import { all, assoc, evolve, isEmpty, isNil, join, keys, map, path, pick, pipe, values, propOr, filter } from 'ramda';
import { APPLIED } from '../Redux/PersonnelRedux';
import type { PersonnelType } from '../Components/PersonnelCard';

export const formatter = (str: string): string =>
  str
    .charAt(0)
    .toUpperCase()
    .concat(str.slice(1).toLowerCase());

export const transformName = pipe(
  values,
  map(formatter),
  join(' '),
);

export const transformLocation = pipe(
  propOr('', 'city'),
  formatter,
);

export const transformUsers = pipe(
  filter(item => !isEmpty(item) && !isNil(item)),
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

export const isSubStringByProp = ({
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
