import { signupUrl } from "../requestUrl/signupUrl";

export const signUpUser = async (login: string, password: string): Promise<void | unknown> => {
  try {
    const response = await fetch(`${signupUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({login, password})
    });
    const data = await response.json();
    const id: number = data.id;
    if (response.status === 200) {
      localStorage.setItem('user_id', JSON.stringify(id));
      window.location.assign('/home/toDoList');
    } 
  } catch (e) {
    return console.log(e);
  }
}