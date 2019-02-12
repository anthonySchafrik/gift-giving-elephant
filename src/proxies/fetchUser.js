import api from './api';

export function getUserInfo(user) {
  return api.get('/user', { params: { ...user } });
}
