export const asyncLogout = () => { 
  return async (): Promise<void> => {
    const user_id = JSON.parse(localStorage.getItem('user_id') || '')!;
    try {
      const response: Response = await fetch('http://127.0.0.1:7000/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_id})
      });
    } catch (err) {
      console.log(err);
    }
  }
};