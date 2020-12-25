import React, { useReducer, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ButtonGroup, SearchBar } from 'react-native-elements';

import robe from '../../../assets/icons/robe.png';
import ReturnButton from '../../components/ReturnButton';
import SpellSearchCard from './components/SpellSearchCard';
import styles from './styles';

const initialState = {
  node: (
    <>
      <Image source={robe} />
      <Text style={styles.initialText}>Use the spell below to filter DnD resources</Text>
    </>
  ),
};

function reducer(state: { node: React.ReactNode }, action: { type: number; payload: string }) {
  switch (action.type) {
    case 0:
      return { node: <SpellSearchCard search={action.payload} /> };
    case 1:
      return { node: <Text>equip</Text> };
    case 2:
      return { node: <Text>monster</Text> };
    default:
      return state;
  }
}

function SearchPage() {
  const [search, setSearch] = useState('');
  const [selectedButton, setSelectedButton] = useState(10);

  const spellButton = () => <Text>Spells</Text>;
  const equipButton = () => <Text>Equipment</Text>;
  const monstersButton = () => <Text>Monsters</Text>;

  const buttons = [{ element: spellButton }, { element: equipButton }, { element: monstersButton }];

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ReturnButton />
      <View style={styles.container}>
        <View>
          <SearchBar
            placeholder="Search..."
            value={search}
            onChangeText={(text) => setSearch(text)}
            containerStyle={[styles.searchContainer, styles.shadow]}
            inputContainerStyle={styles.searchBar}
            style={styles.searchInput}
            onSubmitEditing={() => dispatch({ type: selectedButton, payload: search.split(' ').join('-').toLowerCase() })}
          />
        </View>
        <View style={styles.mainContainer}>{state && state.node}</View>
        <View>
          <ButtonGroup
            onPress={(e) => setSelectedButton(e)}
            selectedIndex={selectedButton}
            buttons={buttons}
            containerStyle={styles.buttonGroupContainer}
            buttonStyle={styles.buttonGroup}
            selectedButtonStyle={styles.buttonGroupActive}
            textStyle={styles.buttonGroupText}
          />
        </View>
      </View>
    </>
  );
}
export default SearchPage;
