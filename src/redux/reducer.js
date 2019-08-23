import { FETCH_MY_POSTS, CREATE_POST } from './types'
// This is going to tell my store
// how it should be changed whenever the
// the function I write takes in the old state and the action

const initialState = {
  user: {},
  postsOnMyWall: []
}

function reducer(state = initialState, action){
  switch(action.type) {
    case FETCH_MY_POSTS:
      return {
        ...state,
        postsOnMyWall: action.payload
      }
    case CREATE_POST:
      return {
        ...state,
        postsOnMyWall: [...state.postsOnMyWall, action.payload]
      }
    break;
    default:
      return state
    break;
  }

  // Given two pieces, the old state and an action
  // this function will always describe the new state we should haave
}

export default reducer