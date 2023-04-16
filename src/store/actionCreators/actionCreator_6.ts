import { REMOVE_TASK } from "../actions/removeTasks";

export const RemoveTask = (idT: number) => ({
  type: REMOVE_TASK,
  payload: {idT}
});