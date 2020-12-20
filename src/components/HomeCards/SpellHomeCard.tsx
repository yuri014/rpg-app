import React from 'react';
import { Image, Text, View } from 'react-native';

import spellBookIcon from '../../../assets/icons/spell-book.png';
import { cardStyleContainer, spellStyleCard } from './styles';

const SpellHomeCard = () => (
  <View>
    <View>
      <Text>Day&apos;s Spells</Text>
    </View>
    <View style={cardStyleContainer.container}>
      <View style={cardStyleContainer.cardHeader}>
        <Image style={{ width: 50, height: 50 }} source={spellBookIcon} />
        <View style={cardStyleContainer.headerText}>
          <Text style={cardStyleContainer.title}>Detect Magic</Text>
          <View style={cardStyleContainer.cardHeader}>
            <Text style={cardStyleContainer.subtitle}>LV: 1 &nbsp;</Text>
            <Text style={cardStyleContainer.subtitle}>Range: Self &nbsp;</Text>
            <Text style={cardStyleContainer.subtitle}>School: Divination &nbsp;</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={spellStyleCard.description}>
          For the duration, you sense the presence of magic within 30 feet of you. If you sense
          magic in this way, you can use your action to see a faint aura around any visible creature
          or object in the area that bears magic, and you learn its school of magic, if any. The
          spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common
          metal, a thin sheet of lead, or 3 feet of wood or dirt.
        </Text>
      </View>
    </View>
  </View>
);

export default SpellHomeCard;
