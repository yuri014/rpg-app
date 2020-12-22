import React from 'react';
import {
  Image, ImageSourcePropType, Text, View,
} from 'react-native';
import { cardStyleContainer, spellStyleCard } from './styles';

interface BlockImage {
  label: string;
  value: string;
  icon: ImageSourcePropType;
}

interface DefaultCardProps {
  items: Array<BlockImage>;
  actions: string;
}

const DefaultCard = ({ items, actions }: DefaultCardProps) => (
  <View>
    <View style={cardStyleContainer.cardImages}>
      {items.map((item) => (
        <View key={item.value} style={cardStyleContainer.imagesDescriptionContainer}>
          <Image style={cardStyleContainer.imageStyle} source={item.icon} />
          <View style={cardStyleContainer.descriptionStats}>
            <Text style={cardStyleContainer.labelStat}>
              {item.label}
              :
            </Text>
            <View style={cardStyleContainer.valueStatContainer}>
              <Text style={cardStyleContainer.valueStat}>{item.value}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
    <View style={spellStyleCard.classes}>
      <Text style={spellStyleCard.classTitle}>
        Actions: &nbsp;
        <Text style={spellStyleCard.classContent}>{actions}</Text>
      </Text>
    </View>
  </View>
);

export default DefaultCard;
