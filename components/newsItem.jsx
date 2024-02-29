import React  from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import {
  Divider,
  Image
} from 'native-base';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import {itemStyles as styles} from './styles/componentsStyles'

export const NewsItem = ({item}) => {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('NewsDetailedInfo', { item });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.newsContainer}>
                <Image
                    source={{
                        uri:
                            item.urlToImage ||
                            'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    alt="Picture unavailable"
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
        </TouchableOpacity>
    );
}