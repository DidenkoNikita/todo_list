export const signUpUser = async (login: string, password: string): Promise<void | unknown> => {
  try {
    const response = await fetch('http://127.0.0.1:7000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({login, password})
    });
    const data = await response.json();
    const id: number = data.id;
    const accessToken: string = data.accessToken;
    if (response.status === 200) {
      localStorage.setItem('user_id', JSON.stringify(id));
      window.location.assign('/home/toDoList');
    } 
  } catch (e) {
    return e;
  }
}