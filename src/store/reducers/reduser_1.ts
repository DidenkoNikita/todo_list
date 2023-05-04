import { ADDING_A_BOARD } from "../actions/addidngABoard";
import { ADDING_A_TASK } from "../actions/addingATask";
import { ADDING_MANY_BOARD } from "../actions/addingManyBoard";
import { ADDING_MANY_TASK } from "../actions/addingManyTask";
import { REMOVE_BOARD } from "../actions/removeBoard";
import { REMOVE_TASK } from "../actions/removeTasks";
import { TASK_NO_COMPLETED } from "../actions/taskNoCompleted";

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

interface State {
  boards: Board[],
  tasks: Task[]
}

interface Action {
  payload: Board & Task,
  type: any
}

function reducer(state: any, action: any) {
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
          boards: [...state.boards, action.payload]
        };

      case ADDING_MANY_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
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

      case TASK_NO_COMPLETED: 
        return {
          ...state,
          tasks: [state.tasks.map((task: Task) => task.id === action.payload.id ? task.completed = action.payload.completed : task), ...state.tasks]
        }   

    default: return state;
  }
}

export default reducer;

// interface Task {
//   id: number; 
//   completed: boolean; 
//   title: string;
//   task_id: number;
// }

// interface Board {
//   idBoard: number;
//   title: string;
// }

// export interface State {
//   boards: Board[];
//   tasks: Task[];
// }

// export type Action =
//   | { type: 'ADDING_A_BOARD'; payload: Board }
//   | { type: 'ADDING_A_TASK'; payload: Task }
//   | { type: 'ADDING_MANY_BOARD'; payload: Board[] }
//   | { type: 'ADDING_MANY_TASK'; payload: Task[] }
//   | { type: 'REMOVE_BOARD'; payload: { idBoard: number } }
//   | { type: 'REMOVE_TASK'; payload: { task_id: number } }
//   | { type: 'TASK_NO_COMPLETED'; payload: { id: number, completed: boolean } };

// function reducer(state: State, action: Action): State {
//   switch(action.type) {
//     case 'ADDING_A_BOARD':
//       return {
//         ...state, 
//         boards: [...state.boards, action.payload] 
//       };

//     case 'ADDING_A_TASK':
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload]
//       };

//     case 'ADDING_MANY_BOARD': 
//       return {
//         ...state,
//         boards: [...state.boards, ...action.payload]
//       };

//     case 'ADDING_MANY_TASK':
//       return {
//         ...state,
//         tasks: [...state.tasks, ...action.payload]
//       };

//     case 'REMOVE_BOARD':   
//       return {
//         ...state,
//         boards: [...state.boards.filter((board: Board) => board.idBoard !== action.payload.idBoard)]
//       };

//     case 'REMOVE_TASK': 
//       return {
//         ...state,
//         tasks: [...state.tasks.filter((task: Task) => task.task_id !== action.payload.task_id)]
//       };

//     case 'TASK_NO_COMPLETED': 
//       return {
//         ...state,
//         tasks: state.tasks.map((task: Task) => task.id === action.payload.id ? { ...task, completed: action.payload.completed } : task)
//       };
      
//     default: return state;
//   }
// }
// export default reducer;