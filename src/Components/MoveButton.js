// @flow

import React from 'react';

type MoveButtonType = {
  onClickHandler: Function,
  onKeyPressHandler: Function,
  icon: string,
};

const MoveButton = ({ onClickHandler, onKeyPressHandler, icon }: MoveButtonType) => {
  return (
    <div role="button" tabIndex="0" onClick={onClickHandler} onKeyPress={onKeyPressHandler} style={styles.container}>
      {icon}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    width: 30,
    padding: '2px 5px',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default MoveButton;
