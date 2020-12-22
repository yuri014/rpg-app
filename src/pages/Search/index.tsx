import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import robe from '../../../assets/icons/robe.png';
import ReturnButton from '../../components/ReturnButton';
import styles from './styles';

function SearchPage() {
  const [search, setSearch] = useState('');

  return (
    <>
      <ReturnButton />
      <View style={styles.container} data-test="search-page">
        <View>
          <SearchBar
            placeholder="Search..."
            value={search}
            onChangeText={(text) => setSearch(text)}
            containerStyle={[styles.searchContainer, styles.shadow]}
            inputContainerStyle={styles.searchBar}
            style={styles.searchInput}
          />
        </View>
        <View style={styles.mainContainer}>
          <Image source={robe} />
          <Text style={styles.initialText}>Use this spell to search DnD resources</Text>
        </View>
      </View>
    </>
  );
}
export default SearchPage;
