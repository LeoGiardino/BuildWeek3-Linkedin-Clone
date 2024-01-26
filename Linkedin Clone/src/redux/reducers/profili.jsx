export default function profiliReducer(state = [], action) {
  console.log(action);
    switch (action.type) {
      case 'GET_PROFILE':
        return {
          ...state,
          profili: action.payload
      };
      default:
        break;
    }

    return state;
  }
  