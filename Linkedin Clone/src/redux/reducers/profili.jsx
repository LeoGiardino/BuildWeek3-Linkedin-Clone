export default function profiliReducer(state = [], action) {
  // console.log(action);
    switch (action.type) {
      case 'GET_PROFILE':
        return {
          ...state,
          profili: action.payload
      };

      case 'PUT_PROFILE':
        return {
          ...state,
          profili: action.payload
        }

        case 'UPLOAD_PROFILE_IMAGE':
          console.log("Immagine caricata:", action);
          console.log("Stato del reducer:", state);
          return {
            ...state,
            profili: action.payload
          };
        
      default:
        break;
    }

    return state;
  }
  