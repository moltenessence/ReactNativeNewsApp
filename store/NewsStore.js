import { makeAutoObservable } from 'mobx';

class NewsStore {
  newsData = [];

  constructor() {
    makeAutoObservable(this);
  }

  setNewsData(data) {
    this.newsData = data;
  }
}

const newsStore = new NewsStore();
export default newsStore;
