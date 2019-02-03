// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import PersonnelActions, { APPLIED, INTERVIEWING, HIRED } from '../Redux/PersonnelRedux';
import PersonnelCard, { type PersonnelType } from '../Components/PersonnelCard';
import MoveButton from '../Components/MoveButton';
import SearchInput from '../Components/SearchInput';

type PersonnelBoardPropsType = {
  personnel: Array<PersonnelType>,
  startup: () => void,
  movePersonnelCard: (category: string, id: number) => void,
};

type PersonnelBoardStateType = {
  search: { name: string, location: string },
};

class PersonnelBoard extends Component<PersonnelBoardPropsType, PersonnelBoardStateType> {
  state = {
    search: { name: '', location: '' },
  };

  componentDidMount() {
    const { startup } = this.props;

    startup();
  }

  handleSearch = (searchText: string, byProp: string): void => {
    this.setState(({ search }) => {
      const updatedSearch = { ...search, [byProp]: searchText };

      return { search: updatedSearch };
    });
  };

  renderList = (listName, navigation) => {
    const { personnel, movePersonnelCard } = this.props;
    const list = personnel.filter(({ category }) => category === listName);

    if (list === null) return null;

    const { search } = this.state;
    const [prev, next] = navigation;

    return (
      <div style={styles.column}>
        {list.map(person =>
          person ? (
            <PersonnelCard key={person.email} person={person} search={search}>
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
    const {
      search: { name, location },
    } = this.state;

    return (
      <div>
        <section style={{ display: 'flex', flexDirection: 'column' }}>
          <SearchInput
            key="byName"
            placeholder="Type name"
            search={name}
            handleChange={(value: string) => this.handleSearch(value, 'name')}
          />
          <SearchInput
            key="byLocation"
            placeholder="Type city"
            search={location}
            handleChange={(value: string) => this.handleSearch(value, 'location')}
          />
        </section>
        <section style={{ display: 'flex' }}>
          {this.renderList(APPLIED, [null, INTERVIEWING])}
          {this.renderList(INTERVIEWING, [APPLIED, HIRED])}
          {this.renderList(HIRED, [INTERVIEWING, null])}
        </section>
      </div>
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
