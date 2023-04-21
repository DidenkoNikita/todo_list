import { ADDING_MANY_BOARD } from "../actions/addingManyBoard";

export const AddingManyBoard = (idBoard: number, title: string, tasks: []) => {
  return {
    type: ADDING_MANY_BOARD,
    payload: { idBoard, title, tasks },
  }
};