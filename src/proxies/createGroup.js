import api from '../proxies/api';

export function createNewGroup(group) {
  return api.post('/group/createGroup', group);
}
