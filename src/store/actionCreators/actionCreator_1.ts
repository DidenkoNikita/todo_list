import { ADDING_A_BOARD } from "../actions/addidngABoard";

export let i = 1;

export const AddingBoard = (id: number) => ({
  type: ADDING_A_BOARD,
  payload: {id: id, title: 'Доска ' + i++, tasks: []}
});