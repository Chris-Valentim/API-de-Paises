import axios from "axios";

const client = axios.create({
  baseURL: 'https://restcountries.com',
})


export { client }
