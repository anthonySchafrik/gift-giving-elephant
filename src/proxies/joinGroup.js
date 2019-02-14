import api from '../proxies/api';

export function joinUserGroup(data) {
  console.log(data);
  return api.post('/group/joinGroup', data);
}
