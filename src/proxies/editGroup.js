import api from '../proxies/api';

export function updateGroup(group) {
  return api.patch('/group/updateGroup', group);
}
