import { AddingManyBoard } from "../actionCreators/actionCreator_3";

export const recordingBoardDataOnServer = () => {
  let j: number = 1
  // const idUser = JSON.parse(localStorage.getItem('id_user') || '');
  return async (dispatch: any) => {
    try {
      const response = await fetch('http://127.0.0.1:7000/boards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({"title": 'Доска ' + j++, "idUser": idUser})
        body: JSON.stringify({"title": 'Доска ' + j++, "idUser": "idUser"})
      });
      const data = await response.json();
      const { id, title, tasks } = data;
      localStorage.setItem('id_board', JSON.stringify(id));
      dispatch(AddingManyBoard(id, title, tasks));
    }
    catch (err) {
      console.log('recordingBoardDataOnServer', err);
    }
  }
}