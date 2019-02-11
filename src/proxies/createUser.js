import api from './api';

export function sighUp(user) {
  return api.post('/createUser', user);
}
