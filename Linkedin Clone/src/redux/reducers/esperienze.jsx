export default function esperienzeReducer(state = [], action) {
  switch (action.type) {
    case 'GET_ESPERIENZE':
      return {
        ...state,
        esperienze: [...action.payload],
      };
    case 'ADD_ESPERIENZE':
      console.log("Esperienze aggiunte:", action);
      return {
        ...state,
        esperienze: [...state.esperienze, action.payload],
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

    
    default:
      break;
  }

  return state;
}


