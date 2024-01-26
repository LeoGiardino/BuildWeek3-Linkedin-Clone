export default function esperienzeReducer(state = [], action) {
    switch (action.type) {
      case 'GET_ESPERIENZE':
        return {
          ...state,
          esperienze: {...action.payload},
        };
      default:
        break;
    }

    return state;
  }
  