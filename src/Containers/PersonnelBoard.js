// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import PersonnelActions, {
  APPLIED,
  INTERVIEWING,
  HIRED,
  type PersonnelType,
  type SearchType,
} from '../Redux/PersonnelRedux';
import MoveButton from '../Components/MoveButton';
import SearchInput from '../Components/SearchInput';
import PersonnelCard from '../Components/PersonnelCard';

type MovePersonnelCardType = (category: string, id: number) => void;

type PersonnelBoardPropsType = {
  personnel: Array<PersonnelType>,
  startup: () => void,
  movePersonnelCard: MovePersonnelCardType,
  search: SearchType,
  saveSearch: (search: { [string]: string }) => void,
};

class PersonnelBoard extends Component<PersonnelBoardPropsType> {
  componentDidMount() {
    const { startup } = this.props;

    startup();
  }

  handleSearch = (searchText: string, byProp: string): void => {
    const { saveSearch } = this.props;

    saveSearch({ [byProp]: searchText });
  };

  renderMoveButton = ({
    category,
    id,
    movePersonnelCard,
    icon,
  }: {
    category: ?string,
    id: number,
    movePersonnelCard: MovePersonnelCardType,
    icon: string,
  }) =>
    category ? (
      <MoveButton icon={icon} onKeyPressHandler={() => {}} onClickHandler={() => movePersonnelCard(category, id)} />
    ) : (
      <div />
    );

  renderList = (listName, navigation) => {
    const { personnel, search, movePersonnelCard } = this.props;
    const list = personnel.filter(({ category }) => category === listName);
    const [prev, next] = navigation;

    return (
      <div style={styles.column}>
        <div style={styles.columnTitle}>{listName.toUpperCase()}</div>
        {list.map(person =>
          person ? (
            <PersonnelCard key={person.email} person={person} search={search}>
              {this.renderMoveButton({ category: prev, id: person.id, movePersonnelCard, icon: `<` })}
              {this.renderMoveButton({ category: next, id: person.id, movePersonnelCard, icon: `>` })}
            </PersonnelCard>
          ) : null,
        )}
      </div>
    );
  };

  render() {
    const {
      search: { name, location },
    } = this.props;

    return (
      <main style={styles.container}>
        <section style={styles.inputContainer}>
          <SearchInput
            key="byName"
            placeholder="Search by name"
            search={name}
            handleChange={(value: string) => this.handleSearch(value, 'name')}
          />
          <SearchInput
            key="byLocation"
            placeholder="Search by city"
            search={location}
            handleChange={(value: string) => this.handleSearch(value, 'location')}
          />
        </section>
        <section style={styles.boardContainer}>
          {this.renderList(APPLIED, [null, INTERVIEWING])}
          {this.renderList(INTERVIEWING, [APPLIED, HIRED])}
          {this.renderList(HIRED, [INTERVIEWING, null])}
        </section>
      </main>
    );
  }
}

const styles = {
  container: {
    padding: '15px',
    background: '#1e372c',
    backgroundImage: '-webkit-radial-gradient(top, circle cover, #1e372c 0%, #252233 80%)',
    fontFamily: 'Verdana',
    minHeight: '100vh',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '20px',
    marginBottom: '20px',
    borderBottom: '2px solid rgba(241, 241, 241, 0.8)',
  },
  boardContainer: {
    display: 'flex',
  },
  column: {
    width: '33%',
    display: 'flex',
    flexDirection: 'column',
  },
  columnTitle: {
    fontSize: '18px',
    backgroundColor: 'rgba(241, 241, 241, 0.8)',
    padding: '10px',
    margin: '10px',
    wordBreak: 'break-all',
    borderRadius: '7px',
    textAlign: 'center',
  },
};

const mapStateToProps = ({ personnelData: { personnel, search } }) => ({
  personnel,
  search,
});

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
  movePersonnelCard: (category, id) => dispatch(PersonnelActions.personnelMoveTo(category, id)),
  saveSearch: search => dispatch(PersonnelActions.personnelSearch(search)),
});

export default connect<any, PersonnelBoardPropsType>(
  mapStateToProps,
  mapDispatchToProps,
)(PersonnelBoard);
