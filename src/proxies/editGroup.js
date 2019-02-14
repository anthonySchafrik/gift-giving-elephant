import api from '../proxies/api';

export function updateGroup(group) {
  console.log(group);
  return api.patch('/group/updateGroup', group);
}
