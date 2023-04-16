import { TASK_NO_COMPLETED } from "../actions/taskNoCompleted";

export const taskNoCompleted = (idT: number, completed: boolean, titleT: string, id: number) => ({
  type: TASK_NO_COMPLETED,
  payload: {idT, completed, titleT, id}
});