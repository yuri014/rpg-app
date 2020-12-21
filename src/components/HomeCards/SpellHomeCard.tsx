import React from 'react';
import { Text, View } from 'react-native';

import { spellStyleCard } from './styles';

const SpellHomeCard = ({ classes, children }: { classes: string; children: React.ReactNode }) => (
  <View>
    <Text style={spellStyleCard.description}>{children}</Text>
    <View style={spellStyleCard.classes}>
      <Text style={spellStyleCard.classTitle}>
        Classes:
        &nbsp;
        <Text style={spellStyleCard.classContent}>{classes}</Text>
      </Text>
    </View>
  </View>
);

export default SpellHomeCard;
