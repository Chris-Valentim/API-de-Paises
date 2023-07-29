import axios from "axios";

const client = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
})


export { client }