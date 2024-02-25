import { API_KEY, endPoint, country } from '../config/config';

export const services = async (category = 'general') => {
  let articles = await fetch(
    `${endPoint}?country=${country}&category=${category}`,
    {
      headers: {
        'X-API-KEY': API_KEY,
      },
    }
  );

  let result = await articles.json();
  articles = null;

  return result.articles;
};
