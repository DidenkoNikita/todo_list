import { ADDING_MANY_BOARD } from "../actions/addingManyBoard";

export const AddingManyBoard = (id: number, title: string, tasks: object) => {
  return {
    type: ADDING_MANY_BOARD,
    payload: { id, title, tasks },
  }
};