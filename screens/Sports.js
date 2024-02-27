import { View, Text, StyleSheet } from 'react-native';
import {
  Divider,
  NativeBaseProvider,
  FlatList,
  Image,
  ScrollView,
  Spinner,
} from 'native-base';
import { useEffect, useState } from 'react';
import { services } from '../services/services';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#EEEDEB',
    border: '1px solid #bdbdbd',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    marginTop: 10,
    color: 'gray',
  },
  description: {
    padding: 20,
  },
  newsContainer: {
    padding: 10,
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
  },
});
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
        <ScrollView height={850}>
          {newsData.length > 0 ? (
            <FlatList
              data={newsData}
              renderItem={({ item }) => (
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
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <View style={styles.spinner}>
              <Spinner color="amber.500" size="lg" />
            </View>
          )}
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

export default SportsScreen;
