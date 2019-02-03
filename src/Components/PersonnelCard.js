// @flow

import React from 'react';

export type PersonnelType = {
  id: number,
  name: string,
  email: string,
  picture: string,
  location: string,
  category: string,
  children: any,
};

const PersonnelCard = ({ id, category, name, email, picture, location, children }: PersonnelType) => (
  <div key={`${category}-${id}`} style={styles.container}>
    <div style={styles.image}>
      <img src={picture} alt="" />
    </div>
    <div style={styles.name}>{name}</div>
    <div style={styles.text}>{location}</div>
    <div style={styles.text}>{email}</div>
    <div style={styles.buttonContainer}>{children}</div>
  </div>
);

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
