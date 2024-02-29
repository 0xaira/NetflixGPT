const TMDB_API_KEY = import.meta.env.TMDB_KEY;
const AUTH_TOKEN = import.meta.env.VITE_AUTH;

export const IMG_CDN_URL= 'https://image.tmdb.org/t/p/w780';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer TMDB_API_KEY.AUTH_TOKEN',
  }
};