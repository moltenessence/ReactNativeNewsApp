import { View, Text } from 'react-native';
import {
  NativeBaseProvider
} from 'native-base';
import { useEffect, useState } from 'react';
import { services } from '../services/services';
import {NewsScrollView} from '../components/newsScrollView'
import {screenStyles as styles} from './styles/screenStyles'

const Business = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    services('business')
      .then((data) => setNewsData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <NativeBaseProvider>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Business - Top Headlines</Text>
        </View>
        <NewsScrollView newsData={newsData} />
      </View>
    </NativeBaseProvider>
  );
};

export default Business;
