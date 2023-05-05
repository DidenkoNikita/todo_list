export const asyncLogout = async (): Promise<void | unknown> => { 
  const user_id: number | string = JSON.parse(localStorage.getItem('user_id') || '')!;
  try {
    await fetch('http://127.0.0.1:7000/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id})
    });
  } catch (e) {
    return e;
  }
};