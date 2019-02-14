import api from '../proxies/api';

export function matchUsers(users) {
  return api.post('/matchedUsers', users);
}
