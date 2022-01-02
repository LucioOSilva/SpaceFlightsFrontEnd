/* eslint-disable */
import axios from 'axios';

const apiBase = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3333/';

export function authHeader() {
  return { 'Content-Type': 'application/json', 'Accept': 'application/json' };
}

function defineUrlBase() {
  return { baseURL: apiBase };
}

export default axios.create(defineUrlBase());
