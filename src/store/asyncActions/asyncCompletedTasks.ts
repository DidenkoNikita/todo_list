import { taskNoCompleted } from "../actionCreators/actionCreator_7";

export const asyncCompletedTasks = (idT: number, completed: boolean, titleT: string, id: number) => {
  let ID = idT;
  let Completed = completed;
  let TitleT = titleT;
  let Id = id;
  console.log('prev::data', ID, Completed, TitleT, Id);
    return async (dispatch: any) => {
      try {
        const response = await fetch('http://127.0.0.1:7000/tasks_completed', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id: ID, completed: Completed, board_id: Id})
        });
        const data = await response.json();
        const { idT, completed, titleT, id} = data;
        console.log('data::', idT, completed, titleT, id)
        // dispatch(taskNoCompleted(completed));
        dispatch(taskNoCompleted(idT, completed, titleT, id));
      }
      catch (err) {
        console.log('taskNoCompleted', err);
      }
    }
}