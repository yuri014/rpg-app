import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import useFilter from '../../../hooks/filterHook';
import { styles } from './styles';
import { IMonster } from '../../../interface/monsterData';

const SEARCH_MONSTER_DATA_RESUME = gql`
  query filterMonster {
    monsters(limit: 400) {
      alignment
      challenge_rating
      index
      name
      type
    }
  }
`;

const MonsterSearchCard = ({ search }: { search: string }) => {
  const { loading, data } = useQuery(SEARCH_MONSTER_DATA_RESUME);

  if (loading) return <Text>Loading...</Text>;

  const equips: IMonster[] = useFilter(data.monsters, search);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal>
        {equips.map((equip) => (
          <View key={equip.name} style={styles.cardContainer}>
            <Text style={styles.title}>{equip.name}</Text>
            <View>
              <Text style={styles.text}>
                Alignment: &nbsp;
                {equip.alignment}
              </Text>
              <Text style={styles.text}>
                Challenge Rating: &nbsp;
                {equip.challenge_rating}
              </Text>
              <Text style={styles.text}>
                Type: &nbsp;
                {equip.type}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MonsterSearchCard;
