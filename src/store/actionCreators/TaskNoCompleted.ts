import { TASK_NO_COMPLETED } from "../actions/taskNoCompleted";

export const taskNoCompleted = (id: number, completed: boolean, title: string, board_id: number) => ({
  type: TASK_NO_COMPLETED,
  payload: {id, completed, title, board_id}
});