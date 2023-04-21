import { REMOVE_BOARD } from "../actions/removeBoard";

export const RemoveBoard = (idBoard: number) => ({
  type: REMOVE_BOARD,
  payload: {idBoard}
});