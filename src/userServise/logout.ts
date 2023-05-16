export const logout = () => {
  localStorage.removeItem('user_id');
  localStorage.removeItem('refresh_token');
  window.location.assign('/');
}