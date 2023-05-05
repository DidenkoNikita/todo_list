import { ADDING_A_BOARD } from "../actions/addidngABoard";
import { ADDING_A_TASK } from "../actions/addingATask";
import { ADDING_MANY_BOARD } from "../actions/addingManyBoard";
import { ADDING_MANY_TASK } from "../actions/addingManyTask";
import { REMOVE_BOARD } from "../actions/removeBoard";
import { REMOVE_TASK } from "../actions/removeTasks";
import { TASK_COMPLET } from "../actions/taskComplet";

interface Task {
  id: number, 
  completed: boolean, 
  title: string,
  task_id: number
}

interface Board {
  idBoard: number,
  title: string
}

export interface State {
  boards: Board[],
  tasks: Task[]
}

export interface Action { 
  type: string; 
  payload: { 
    idBoard: number; 
    task_id: number; 
    id: number; 
    completed: boolean; 
  }; 
}

function reducer(state: State, action: Action) {
  switch(action.type) {
      case ADDING_A_BOARD:
        return {
           ...state, 
           boards: [...state.boards, action.payload] 
          };

      case ADDING_A_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };

      case ADDING_MANY_BOARD: 
        return {
          ...state,
          boards: [...state.boards.filter((board: Board) => board.idBoard !== action.payload.idBoard), action.payload]
        };

      case ADDING_MANY_TASK:
        return {
          ...state,
          tasks: [...state.tasks.filter((task: Task) => task.id !== action.payload.id), action.payload]
      };

      case REMOVE_BOARD:   
        return {
          ...state,
          boards: [...state.boards.filter((board: Board) => board.idBoard !== action.payload.idBoard)]
        };

      case REMOVE_TASK: 
        return {
          ...state,
          tasks: [...state.tasks.filter((task: Task) => task.id !== action.payload.task_id)]
        }

      case TASK_COMPLET: 
        return {
          ...state,
          tasks: [state.tasks.map((task: Task) => task.id === action.payload.id ? task.completed = action.payload.completed : task), ...state.tasks]
        }   

    default: return state;
  }
}

export default reducer;