import axios from 'axios';

const token = localStorage.getItem('token');
const replacedToken = token ? token.replace('"', '').replace('"', '') : '';

const httpClient = axios.create({
  baseURL: 'https://projeto-integrador-4.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${replacedToken}`,
  },
});

export const login = (data) => httpClient.post('/auth/login', data);

export const forgot = (data) => httpClient.post('/auth/forgot', data);

export const createAccount = (data) => httpClient.post('/users', data);

export const getAllProducts = () => httpClient.get('/products');

export const getProductById = (id) => httpClient.get(`/products/${id}`);

export const editProduct = (id, data) => httpClient.post(`/products/${id}`, data);

export const addProduct = (data) => httpClient.post('/products', data);

export const removeProduct = (id) => httpClient.delete(`/products/${id}`);

export const getAllCategories = () => httpClient.get('/categories');

export const getCategorieById = (id) => httpClient.get(`/categories/${id}`);
