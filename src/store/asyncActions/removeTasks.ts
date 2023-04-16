import { RemoveTask } from "../actionCreators/actionCreator_6";

export const removeTasks = (idT: number) => {
  let ID = idT;
    return async (dispatch: any) => {
      try {
        const response = await fetch('http://127.0.0.1:7000/tasks', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"id": ID})
        });
        const data = await response.json();
        const { idT } = data;
        dispatch(RemoveTask(idT));
      }
      catch (err) {
        console.log('removeDataBoards', err);
      }
    }
}