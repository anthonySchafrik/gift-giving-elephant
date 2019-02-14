import api from './api';

export function getGroupInfo(group) {
  return api.get('/group', { params: { ...group } });
}
