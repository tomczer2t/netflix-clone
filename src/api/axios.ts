import axiosDefault from 'axios';

export const axios = axiosDefault.create({
  baseURL: 'https://api.themoviedb.org/3/',
});