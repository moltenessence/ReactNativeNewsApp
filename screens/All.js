import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  NativeBaseProvider
} from 'native-base';
import { services } from '../services/services';
import {NewsScrollView} from '../components/newsScrollView'
import {screenStyles as styles} from './styles/screenStyles'

const All = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
      services("category")
        .then((data) => setNewsData(data))
        .catch((err) => console.log(err));
    }, []);


  return (
    <NativeBaseProvider>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>All - Top Headlines</Text>
        </View>
        <NewsScrollView newsData={newsData} />
      </View>
    </NativeBaseProvider>
  );
};

export default All;
