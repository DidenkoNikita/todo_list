interface Data {
  user_id: number
  accessToken: string
}

export const profileUser = (login: string, password: string) => {
  const httpHeaders = {
    'Content-Type': 'application/json'
  }
  const myHeaders = new Headers(httpHeaders);
  return async (): Promise<Response | null | undefined> => {
    try {
      const response: Response = await fetch('http://127.0.0.1:7000/login', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({login, password})
      });
      const data = await response.json();
      const {user_id, accessToken}: Data = data;
      if (response.status === 200) {
        localStorage.setItem('user_id', JSON.stringify(user_id));
        localStorage.setItem('access_token', JSON.stringify(accessToken));
        console.log('Перенаправлено');
        window.location.assign('/home/toDoList');
      } else {
        return null;
      }
    } catch (err) {
      console.log('profileUser::', err);
    }
  }
}