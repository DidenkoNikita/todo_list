import { ADDING_MANY_TASK } from "../actions/addingManyTask";

export const AddingManyTask = (id: number, completed: boolean, title: string, board_id: number) => ({
  type: ADDING_MANY_TASK,
  payload: {id, completed, title, board_id}
});