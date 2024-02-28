import { View, Text, StyleSheet } from 'react-native';
import {
  NativeBaseProvider
} from 'native-base';
import { useEffect, useState } from 'react';
import { services } from '../services/services';
import {NewsScrollView} from '../components/newsScrollView'
import {screenStyles as styles} from './styles/screenStyles'

const SportsScreen = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    services('sports')
      .then((data) => setNewsData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <NativeBaseProvider>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Sports - Top Headlines</Text>
        </View>
        <NewsScrollView newsData={newsData} />
      </View>
    </NativeBaseProvider>
  );
};

export default SportsScreen;
