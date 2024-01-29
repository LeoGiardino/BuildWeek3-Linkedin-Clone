export default function postReducer(state = [], action) {
    console.log(action);
      switch (action.type) {
        case 'GET_POSTS':
          return {
            ...state,
            post: [...action.payload]
        };

        case 'ADD_POST':
      console.log("Post aggiunti:", action);
      return {
        ...state,
        post: [...state.post, action.payload],
      }
      case 'DEL_POST':
      const newPosts = state.post.filter(post => post._id !== action.payload);
      return {

          ...state,
          post: newPosts
      }
          
        default:
          break;
      }
  
      return state;
    }
    