export default function profilesReducer(state = [], action) {
    switch (action.type) {
      case 'GET_PROFILE':
        return {
          ...state,
          profili: {...action.payload},
        };
      default:
        break;
    }

    return state;
  }
  