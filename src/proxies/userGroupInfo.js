import api from '../proxies/api';

export function fetchUserGroup(group) {
  return api.get(`/userGroupInfo/?group=${group}`);
}
