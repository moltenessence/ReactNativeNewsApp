import React from 'react';
import { View } from 'react-native';
import {
  ScrollView,
  Spinner,
} from 'native-base';
import { NewsItem } from './newsItem';
import {scrollViewStyles as styles} from './styles/componentsStyles'
import uuid from 'react-uuid';

export const NewsScrollView = ({newsData}) => {
    return (
        <ScrollView>
        {newsData.length > 0 ? (
              newsData.filter(x => x.title !== '[Removed]').map(newsItem => {
                return <NewsItem item={newsItem} key={uuid()}/>
              })
        ) : (
          <View style={styles.spinner}>
            <Spinner color="amber.500" size="lg" />
          </View>
        )}
      </ScrollView>
    );
}