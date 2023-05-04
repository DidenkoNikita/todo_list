import { ADDING_A_TASK } from "../actions/addingATask";

export const AddingTask = (id: number) => ({
  type: ADDING_A_TASK,
  payload: {idT: id, completed: false, titleT: '', id}
});