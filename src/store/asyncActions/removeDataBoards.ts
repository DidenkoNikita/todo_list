import { RemoveBoard } from "../actionCreators/RemoveBoard";
import { store } from "../store";

export const removeDataBoards = async (id: number): Promise<void | unknown> => {
  let ID: number = id;  
  try {
    const response: Response = await fetch('http://127.0.0.1:7000/boards', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"id": ID})
    });
    const data = await response.json();
    const { id } = data;
    store.dispatch(RemoveBoard(id));
  } catch (e) {
    return e;
  } 
}