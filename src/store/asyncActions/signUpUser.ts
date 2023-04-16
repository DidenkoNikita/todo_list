export const signUpUser = (login: string, password: string) => {
  return async () => {
    try {
      const response = await fetch('http://127.0.0.1:7000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({login, password})
      });
      const {refreshToken, accessToken, id} = await response.json();
      console.log('refreshToken::', refreshToken);
      console.log('accessToken::', accessToken);
      localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
      localStorage.setItem('id_user', JSON.stringify(id));
    }
    catch (err) {
      console.log('createUser::', err);

    }
  }
}