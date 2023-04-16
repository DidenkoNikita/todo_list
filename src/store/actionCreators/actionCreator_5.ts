import { REMOVE_BOARD } from "../actions/removeBoard";

export const RemoveBoard = (id: number) => ({
  type: REMOVE_BOARD,
  payload: {id}
});