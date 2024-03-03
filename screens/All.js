import React, { useEffect, useState } from 'react';
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

const All = observer(() => {
  useEffect(() => {
    newsStore.setNewsData([])
    services(NewsCategories.All)
      .then((data) => newsStore.setNewsData(data))
      .catch((err) => console.log(err));
  }, []);

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
