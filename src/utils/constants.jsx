const TMDB_API_KEY = import.meta.env.TMDB_KEY;
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer TMDB_API_KEY.eyJhdWQiOiJjODA4NjM3M2FlN2VjMGYzMWI5ODJkMTY4YjJiMDcwMSIsInN1YiI6IjY1NzA0ZmY5NzlhMWMzMDBlMThlNjUyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O2pbbf-lLt-apmPK3O8H8MDDBu8qAXH2GpJRTIxJlBI'
    }
  };
