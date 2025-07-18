import axios, { AxiosInstance } from 'axios';

const ApiCars: AxiosInstance = axios.create({
  baseURL: 'https://kenzie-kars.herokuapp.com/cars',
  timeout: 5000
});

const ApiShop: AxiosInstance = axios.create({
  baseURL: 'https://e-commerce-backend-91t3.onrender.com',
  timeout: 5000
})

export { ApiCars, ApiShop }
