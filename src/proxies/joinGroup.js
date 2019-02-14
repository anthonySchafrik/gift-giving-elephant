import api from '../proxies/api';

export function joinUserGroup(data) {
  return api.post('/group/joinGroup', data);
}
