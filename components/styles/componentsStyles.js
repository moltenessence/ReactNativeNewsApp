import { StyleSheet } from 'react-native';

export const itemStyles = StyleSheet.create({
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
    newsContainer: {
        padding: 10,
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10,
    }
});

export const scrollViewStyles = StyleSheet.create({
    spinner: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 600,
    },
  });