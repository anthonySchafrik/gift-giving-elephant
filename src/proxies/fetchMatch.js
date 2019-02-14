import api from '../proxies/api';

export function fetchMatch(userId) {
  return api.get(`/getMatch/?userId=${userId}`);
}
