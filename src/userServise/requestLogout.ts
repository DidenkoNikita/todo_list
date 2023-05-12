import { logoutUrl } from "../requestUrl/logoutUrl";

export const requestLogout = async (): Promise<void | unknown> => { 
  const user_id: number | string = JSON.parse(localStorage.getItem('user_id') || '')!;
  try {
    await fetch(`${logoutUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id})
    });
  } catch (e) {
    return console.log(e);
  }
};