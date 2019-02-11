import api from './api';

export function login(user) {
  const { username, password } = user;
  return api.get('user/login', {
    params: {
      username,
      password
    }
  });
}
