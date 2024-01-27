export default function listaProfiliReducer(state = [], action) {
    switch (action.type) {
      case 'GET_ALL_PROFILES':
        return {
            
          listaProfili: [...action.payload],
        };
      default:
        break;
    }

    return state;
  }