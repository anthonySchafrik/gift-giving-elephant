import api from '../proxies/api';

export function updateUser(user) {
  return api.patch('/user', user);
}
