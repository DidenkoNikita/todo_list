import { ADDING_MANY_TASK } from "../actions/addingManyTask";

export const AddingManyTask = (idT: number, completed: boolean, titleT: string, id: number) => ({
  type: ADDING_MANY_TASK,
  payload: {idT, completed, titleT, id}
});