import { ADDING_A_BOARD } from "../actions/addidngABoard";

export const AddingBoard = (id: number) => ({
  type: ADDING_A_BOARD,
  payload: {id: id, title: 'Доска', tasks: []}
});