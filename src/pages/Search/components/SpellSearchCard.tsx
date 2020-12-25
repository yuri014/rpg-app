import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import useFilter from '../../../hooks/filterHook';
import { styles } from './styles';
import { ISpell } from '../../../interface/spellData';

const SEARCH_SPELL_DATA_RESUME = gql`
  query filterSpell {
    spells(limit: 400) {
      casting_time
      classes {
        name
      }
      index
      level
      name
      school {
        name
      }
    }
  }
`;

const SpellSearchCard = ({ search }: { search: string }) => {
  const { loading, data } = useQuery(SEARCH_SPELL_DATA_RESUME);

  if (loading) return <Text>Loading...</Text>;

  const spells: ISpell[] = useFilter(data.spells, search);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal>
        {spells.map((spell) => (
          <View key={spell.name} style={styles.cardContainer}>
            <Text style={styles.title}>{spell.name}</Text>
            <View>
              <Text style={styles.text}>
                Lv: &nbsp;
                {spell.level}
              </Text>
              <Text style={styles.text}>
                School: &nbsp;
                {spell.school.name}
              </Text>
              <Text style={styles.text}>
                Classes: &nbsp;
                {spell.classes?.map((c) => c.name).join(', ')}
              </Text>
              <Text style={styles.text}>
                Casting Time: &nbsp;
                {spell.casting_time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpellSearchCard;
