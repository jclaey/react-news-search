import axios from 'axios';

export default axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': 'eedecb9112994f30ac983ccbed7789cd'
  }
});