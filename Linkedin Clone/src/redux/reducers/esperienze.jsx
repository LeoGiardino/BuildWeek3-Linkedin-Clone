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
        esperienze: { ...action.payload },
      }

    case 'PUT_ESPERIENZE':
      // Trova l'indice dell'oggetto da aggiornare nell'array
      const indexToUpdate = state.esperienze.findIndex(item => item._id === action.payload._id);

      // Se l'oggetto è stato trovato, sostituiscilo con il nuovo payload
      if (indexToUpdate !== -1) {
        const updatedEsperienze = [...state.esperienze];
        updatedEsperienze[indexToUpdate] = action.payload;

        return {
          ...state,
          esperienze: updatedEsperienze
        };
      } else {
        // Se l'oggetto non è stato trovato, restituisci lo stato senza modifiche
        return state;
      }

    default:
      break;
  }

  return state;
}

