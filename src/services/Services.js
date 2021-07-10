import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://projeto-integrador-4.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});

export const login = (data) => httpClient.post('/auth/login', data);

export const forgot = (data) => httpClient.post('/auth/forgot', data);

export const update = (id, data) => httpClient.put(`/livro/${id}`, data);

export const remove = (id) => httpClient.delete(`/livro/${id}`);
