import React from 'react';
import {
  Image, ImageSourcePropType, Text, View,
} from 'react-native';

import { cardStyleContainer } from './styles';

interface CardsProps {
  title: string;
  titleImage: ImageSourcePropType;
  cardImage: ImageSourcePropType;
  children: React.ReactNode;
  header: {
    title: string;
    subtitle: string[];
  };
}

const HomeCards = ({
  titleImage, cardImage, children, header, title,
}: CardsProps) => (
  <View>
    <View style={cardStyleContainer.mainTitleContainer}>
      <Text style={cardStyleContainer.mainTitle}>{title}</Text>
      <Image style={cardStyleContainer.iconTitle} source={titleImage} />
    </View>
    <View style={cardStyleContainer.container}>
      <View style={cardStyleContainer.cardHeader}>
        <Image style={cardStyleContainer.imageStyle} source={cardImage} />
        <View style={cardStyleContainer.headerText}>
          <Text style={cardStyleContainer.title}>{header.title}</Text>
          <View style={cardStyleContainer.cardHeader}>
            {header.subtitle.map((item) => (
              <Text key={item} style={cardStyleContainer.subtitle}>
                {item}
                &nbsp;
                &nbsp;
              </Text>
            ))}
          </View>
        </View>
      </View>
      <View>{children}</View>
    </View>
  </View>
);

export default HomeCards;
