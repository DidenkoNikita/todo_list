export const profileUser = (login: string, password: string) => {
  const httpHeaders = {
    'Content-Type': 'application/json'
  }
  const myHeaders = new Headers(httpHeaders);
  return async (): Promise<void> => {
    try {
      const response: Response = await fetch('http://127.0.0.1:7000/login', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({login, password})
      });
      const data = await response.json();
      const accessToken = data;
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
    } catch (err) {
      console.log('profileUser::', err);
    }
  }
}