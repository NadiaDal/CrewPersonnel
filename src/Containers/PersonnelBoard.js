// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import PersonnelActions, { APPLIED, INTERVIEWING, HIRED } from '../Redux/PersonnelRedux';
import PersonnelCard, { type PersonnelType } from '../Components/PersonnelCard';
import MoveButton from '../Components/MoveButton';

type PersonnelBoardPropsType = {
  personnel: Array<PersonnelType>,
  startup: () => void,
  movePersonnelCard: (category: string, id: number) => void,
};

class PersonnelBoard extends Component<PersonnelBoardPropsType> {
  componentDidMount() {
    const { startup } = this.props;

    startup();
  }

  renderList = (listName, navigation) => {
    const { personnel, movePersonnelCard } = this.props;
    const [prev, next] = navigation;
    const list = personnel.filter(({ category }) => category === listName);

    if (list === null) return null;

    return (
      <div style={styles.column}>
        {list.map(person =>
          person ? (
            <PersonnelCard key={person.email} {...person}>
              {prev ? (
                <MoveButton
                  icon={`<`}
                  onKeyPressHandler={() => {}}
                  onClickHandler={() => movePersonnelCard(prev, person.id)}
                />
              ) : (
                <div />
              )}
              {next ? (
                <MoveButton
                  icon={`>`}
                  onKeyPressHandler={() => {}}
                  onClickHandler={() => movePersonnelCard(next, person.id)}
                />
              ) : (
                <div />
              )}
            </PersonnelCard>
          ) : null,
        )}
      </div>
    );
  };

  render() {
    return (
      <section style={{ display: 'flex' }}>
        {this.renderList(APPLIED, [null, INTERVIEWING])}
        {this.renderList(INTERVIEWING, [APPLIED, HIRED])}
        {this.renderList(HIRED, [INTERVIEWING, null])}
      </section>
    );
  }
}

const styles = {
  column: { width: '33%', display: 'flex', flexDirection: 'column' },
};

const mapStateToProps = ({ personnelData: { personnel } }) => ({
  personnel,
});

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
  movePersonnelCard: (category, id) => dispatch(PersonnelActions.personnelMoveTo(category, id)),
});

export default connect<any, PersonnelBoardPropsType>(
  mapStateToProps,
  mapDispatchToProps,
)(PersonnelBoard);
