import api from './api';

export function getGroupInfo(query) {
  return api.get('/group', query);
}
