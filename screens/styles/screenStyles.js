import { StyleSheet } from 'react-native';

export const screenStyles = StyleSheet.create({
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
    }
  });

export const newsDetailedInfoStyles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      margin: 7,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    author: {
      color: 'gray',
      marginBottom: 10,
    },
    descriptionContainer: {
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      marginBottom: 5,
    },
    publishedAt: {
      color: 'gray',
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
    },
    content: {
      fontSize: 16,
    },
  });