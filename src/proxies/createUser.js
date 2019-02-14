import api from './api';

export function createUser(user) {
  return api.post('/user', user);
}
