import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import {
  NativeBaseProvider
} from 'native-base';
import { services } from '../services/services';
import {NewsScrollView} from '../components/newsScrollView'
import { screenStyles as styles } from './styles/screenStyles'
import { NewsCategories } from '../shared/constants';
import { observer } from 'mobx-react-lite';
import newsStore from '../store/NewsStore';
import {useIsFocused} from '@react-navigation/native';

const All = observer(() => {
  const isFocused = useIsFocused();
  
  useEffect(() => {
    services(NewsCategories.All)
      .then((data) => newsStore.setNewsData(data))
      .catch((err) => console.log(err));
  }, [isFocused]);

  return (
    <NativeBaseProvider>

      <View>
        <View style={styles.container}>
          <Text style={styles.text}>All - Top Headlines</Text>
        </View>
        <NewsScrollView newsData={newsStore.newsData} />
      </View>
    </NativeBaseProvider>
  );
});

export default All;
