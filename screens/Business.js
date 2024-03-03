import { View, Text } from 'react-native';
import {
  NativeBaseProvider
} from 'native-base';
import { useEffect } from 'react';
import { services } from '../services/services';
import {NewsScrollView} from '../components/newsScrollView'
import {screenStyles as styles} from './styles/screenStyles'
import { NewsCategories } from '../shared/constants';
import { observer } from 'mobx-react-lite';
import newsStore from '../store/NewsStore';

const Business = observer(() => {
  useEffect(() => {
    newsStore.setNewsData([])
    services(NewsCategories.Business)
      .then((data) => newsStore.setNewsData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <NativeBaseProvider>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Business - Top Headlines</Text>
        </View>
        <NewsScrollView newsData={newsStore.newsData} />
      </View>
    </NativeBaseProvider>
  );
});

export default Business;
