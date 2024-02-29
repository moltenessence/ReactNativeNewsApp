import React from 'react';
import { View } from 'react-native';
import {
  ScrollView,
  Spinner,
} from 'native-base';
import { NewsItem } from './newsItem';
import {scrollViewStyles as styles} from './styles/componentsStyles'

export const NewsScrollView = ({newsData}) => {
    return (
        <ScrollView>
        {newsData.length > 0 ? (
              newsData.filter(x => x.title !== '[Removed]').map(newsItem => {
                return <NewsItem item={newsItem} key={newsItem.id}/>
              })
        ) : (
          <View style={styles.spinner}>
            <Spinner color="amber.500" size="lg" />
          </View>
        )}
      </ScrollView>
    );
}