export const profileUser = (login: string, password: string) => {
  // const accessToken: string | null = JSON.parse(localStorage.getItem('accessToken'));
  // const refreshToken: string | null = JSON.parse(localStorage.getItem('refreshToken'));
  const httpHeaders = {
    // Authorization: `Bearer ${accessToken}`,
    // AuthorizationTwo: `Bearer ${refreshToken}`,
    'Content-Type': 'application/json'
  }

  const myHeaders = new Headers(httpHeaders);
  
  return async () => {
    try {
      const response = await fetch('http://127.0.0.1:7000/login', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({login, password})
      });
      const data = await response.json();
      const accessToken = data;
      // console.log('token::', token)
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
    } catch (err) {
      console.log('profileUser::', err);
    }
  }
}