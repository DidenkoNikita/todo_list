import { TASK_COMPLET } from "../actions/taskComplet";

export const taskComplet = (id: number, completed: boolean, title: string, board_id: number) => ({
  type: TASK_COMPLET,
  payload: {id, completed, title, board_id}
});