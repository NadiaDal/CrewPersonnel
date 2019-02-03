import React from 'react';
import renderer from 'react-test-renderer';
import PersonnelCard from '../PersonnelCard';

const person = {
  id: 0,
  category: 'applied',
  email: 'brayden.hamilton@example.com',
  location: 'Nottingham',
  name: 'Mr Brayden Hamilton',
  picture: 'https://randomuser.me/api/portraits/med/men/91.jpg',
};

it('personnel card with empty search fields renders correctly', () => {
  const search = { name: '', location: '' };

  const tree = renderer.create(<PersonnelCard search={search} person={person} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('personnel card match by name renders correctly', () => {
  const search = { name: 'Bra', location: '' };

  const tree = renderer.create(<PersonnelCard search={search} person={person} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('personnel card match by location renders correctly', () => {
  const search = { name: '', location: 'Nottin' };

  const tree = renderer.create(<PersonnelCard search={search} person={person} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('personnel card does not match by name renders correctly', () => {
  const search = { name: 'Mag', location: 'Nottin' };

  const tree = renderer.create(<PersonnelCard search={search} person={person} />).toJSON();

  expect(tree).toBeNull();
});

it('personnel card does not match by location renders correctly', () => {
  const search = { name: 'Hamilton', location: 'Coventry' };

  const tree = renderer.create(<PersonnelCard search={search} person={person} />).toJSON();

  expect(tree).toBeNull();
});
