import api from './api';

export function createUser(data) {
  return api.post('/user', data);
}
