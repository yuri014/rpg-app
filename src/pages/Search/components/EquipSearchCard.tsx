import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import useFilter from '../../../hooks/filterHook';
import { styles } from './styles';
import { IEquip } from '../../../interface/equipData';

const SEARCH_EQUIP_DATA_RESUME = gql`
  query filterEquip {
    equipments(limit: 400) {
      cost {
        quantity
        unit
      }
      equipment_category {
        name
      }
      index
      name
      weight
    }
  }
`;

const EquipSearchCard = ({ search }: { search: string }) => {
  const { loading, data } = useQuery(SEARCH_EQUIP_DATA_RESUME);

  if (loading) return <Text>Loading...</Text>;

  const equips: IEquip[] = useFilter(data.equipments, search);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal>
        {equips.map((equip) => (
          <View key={equip.name} style={styles.cardContainer}>
            <Text style={styles.title}>{equip.name}</Text>
            <View>
              <Text style={styles.text}>
                Weight: &nbsp;
                {equip.weight}
              </Text>
              <Text style={styles.text}>
                Equipment Category: &nbsp;
                {equip.equipment_category.name}
              </Text>
              <Text style={styles.text}>
                Cost: &nbsp;
                {equip.cost.quantity}
                &nbsp;
                {equip.cost.unit}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EquipSearchCard;
