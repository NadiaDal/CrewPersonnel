import React from 'react';
import renderer from 'react-test-renderer';
import MoveButton from '../MoveButton';

it('move to right renders correctly', () => {
  const identity = () => {};
  const tree = renderer
    .create(<MoveButton onClickHandler={identity} onKeyPressHandler={identity} icon={'>'} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('move to left renders correctly', () => {
  const identity = () => {};
  const tree = renderer
    .create(<MoveButton onClickHandler={identity} onKeyPressHandler={identity} icon={'<'} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
