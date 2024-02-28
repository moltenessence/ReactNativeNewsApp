import React  from 'react';
import { View, Text } from 'react-native';
import {
  Divider,
  Image
} from 'native-base';
import moment from 'moment';
import {itemStyles as styles} from './styles/componentsStyles'

export const NewsItem = ({item}) => {
    return (
        <View>
            <View style={styles.newsContainer}>
                <Image
                    source={{
                        uri:
                            item.urlToImage ||
                            'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    alt="Alternate Text"
                    width={550}
                    height={250}
                    resizeMode="cover"
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>
                    {moment(item.publishedAt).format('LLL')}
                </Text>
                <Text style={styles.newsDescription}>
                    {item.description}
                </Text>
            </View>
            <Divider bg="#e0e0e0" />
        </View>
    );
}