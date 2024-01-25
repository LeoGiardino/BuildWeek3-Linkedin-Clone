export default function profilesReducer(state = [], action) {
  console.log(action);
    switch (action.type) {
      case 'GET_PROFILE':
        return {
          ...state,
          profili: {
              ...state.profili,
              ...action.payload,
          },
      };
      default:
        break;
    }

    return state;
  }
  