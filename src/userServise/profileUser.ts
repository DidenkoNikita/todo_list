import { loginUrl } from "../requestUrl/loginUrl";

interface Data {
  user_id: number;
}

export const profileUser = async (login: string, password: string): Promise<void | unknown> => {
  try {
    const response: Response = await fetch(`${loginUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({login, password})
    });
    const data = await response.json();
    const {user_id}: Data = data;
    if (response.status === 200) {
      localStorage.setItem('user_id', JSON.stringify(user_id));
      window.location.assign('/home/toDoList');
    }
  } catch (e) {
    return console.log(e);
  }
}