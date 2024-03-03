import React from 'react';
import { View, Text } from 'react-native';
import { Image, ScrollView } from 'native-base';
import {newsDetailedInfoStyles as styles} from './styles/screenStyles'

const NewsDetailedInfoScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>Authored by: {item.author}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.publishedAt}>{item.publishedAt}</Text>
      </View>
      <Image
        source={{
          uri: item.urlToImage || 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
        style={styles.image}
      />
      <Text style={styles.content}>{item.content}</Text>
    </ScrollView>
  );
};

export default NewsDetailedInfoScreen;
