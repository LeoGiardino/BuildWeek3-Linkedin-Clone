export default function esperienzeReducer(state = [], action) {
  console.log(action);
  switch (action.type) {
    case 'GET_ESPERIENZE':
      return {
        ...state,
        esperienze: [...action.payload],
      };
      case 'ADD_POST':
        console.log("Post aggiunti:", action);
        return {
          ...state,
          post: Array.isArray(state.post) ? [...state.post, action.payload] : [action.payload]
        }

    case 'PUT_ESPERIENZE':
      // Trova l'indice dell'oggetto da aggiornare nell'array
      const indexToUpdate = state.esperienze.findIndex(exp => exp._id === action.payload._id);

      console.log("Esperienze aggiunte:", indexToUpdate);
      // Sostituisci l'oggetto esistente con quello aggiornato
      const updatedEsperienze = [...state.esperienze];
      updatedEsperienze[indexToUpdate] = action.payload;

      return {
        ...state,
        esperienze: updatedEsperienze,
      }

      case 'DEL_ESPERIENZE':
    const updatedEsperienzeAfterDelete = state.esperienze.filter(exp => exp._id !== action.payload._id);
    return {
        ...state,
        esperienze: updatedEsperienzeAfterDelete,
    };
    case 'UPLOAD_ESPERIENZA_IMAGE':
      const indiceAggiornato = state.esperienze.findIndex(exp => exp._id === action.payload._id);
      const esperienzeVecchie = [...state.esperienze];
      esperienzeVecchie[indiceAggiornato] = action.payload;

      return {
        ...state,
        esperienze: esperienzeVecchie,
      }
    default:
      break;
  }

  return state;
}


