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
    width: 30,
    padding: 10,
    backgroundColor: 'green',
  },
};

export default MoveButton;
