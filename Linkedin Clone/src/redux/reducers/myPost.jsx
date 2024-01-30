export default function myPostReducer(state = [], action) {
    console.log(action);
      switch (action.type) {
        
        
      case 'UPLOAD_POST_IMAGE':
      const indiceAggiornato = state.post.findIndex(exp => exp._id === action.payload._doc._id);
      const postVecchi = [...state.post];
      postVecchi[indiceAggiornato] = action.payload;

      return {
        ...state,
        post: postVecchi,
      }

      case 'GET_MYPOSTS':
        return {
            ...state,
          post: [...action.payload]
        }
          
        default:
          break;
      }
  
      return state;
    }
    