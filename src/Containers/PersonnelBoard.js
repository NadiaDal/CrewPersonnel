// @flow

import React, { Component } from 'react';
import Api from '../../Services/Api';

const api = Api.create();

class PersonnelBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    api.getUsers().then(({ data: { results } }) => this.setState({ users: results }));
  }

  render() {
    const { users } = this.state;

    return (
      <div style={{ display: 'flex' }}>
        {users &&
          users.map(({ name: { first, last }, picture: { medium } }) => (
            <div
              key={`${first}-${last}`}
              style={{
                border: '2px solid green',
                backgroundColor: '#f1f1f1',
                width: '300px',
                padding: '10px',
                margin: '10px',
              }}
            >
              <div style={{ width: 60, height: 60, borderRadius: '50%', overflow: 'hidden' }}>
                <img src={medium} alt="" />
              </div>
              <div>{first}</div>
            </div>
          ))}
      </div>
    );
  }
}

export default PersonnelBoard;
