import axios from 'axios';

export const getTodos = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos');
};

export const getAlbums = () => {
  return axios.get('https://jsonplaceholder.typicode.com/albums');
};

export const getUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};
