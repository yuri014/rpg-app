import React from 'react';
import {
  Image, ImageSourcePropType, Text, View,
} from 'react-native';
import { cardStyleContainer, spellStyleCard } from './styles';

interface MonsterCardProps {
  shieldIcon: ImageSourcePropType;
  hpIcon: ImageSourcePropType;
  diceIcon: ImageSourcePropType;
  actions: string;
}

const MonsterCard = ({
  shieldIcon, hpIcon, diceIcon, actions,
}: MonsterCardProps) => (
  <View>
    <View style={cardStyleContainer.cardImages}>
      <View style={cardStyleContainer.imagesDescriptionContainer}>
        <Image style={cardStyleContainer.imageStyle} source={shieldIcon} />
        <View style={cardStyleContainer.descriptionStats}>
          <Text style={cardStyleContainer.labelStat}>AC:</Text>
          <View style={cardStyleContainer.valueStatContainer}>
            <Text style={cardStyleContainer.valueStat}>12</Text>
          </View>
        </View>
      </View>
      <View style={cardStyleContainer.imagesDescriptionContainer}>
        <Image style={cardStyleContainer.imageStyle} source={hpIcon} />
        <View style={cardStyleContainer.descriptionStats}>
          <Text style={cardStyleContainer.labelStat}>HP:</Text>
          <View style={cardStyleContainer.valueStatContainer}>
            <Text style={cardStyleContainer.valueStat}>59</Text>
          </View>
        </View>
      </View>
      <View style={cardStyleContainer.imagesDescriptionContainer}>
        <Image style={cardStyleContainer.imageStyle} source={diceIcon} />
        <View style={cardStyleContainer.descriptionStats}>
          <Text style={cardStyleContainer.labelStat}>HD:</Text>
          <View style={cardStyleContainer.valueStatContainer}>
            <Text style={cardStyleContainer.valueStat}>7d12</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={spellStyleCard.classes}>
      <Text style={spellStyleCard.classTitle}>
        Actions: &nbsp;
        <Text style={spellStyleCard.classContent}>{actions}</Text>
      </Text>
    </View>
  </View>
);

export default MonsterCard;
