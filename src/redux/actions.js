// This file will contain all the actions
// we'll also be doing something new and it will be 
// called action creators... DEFINITION OF AN ACTION CREATOR
// a function that creates an action

import { FETCH_MY_POSTS } from './types'

import { CREATE_POST } from '../redux/types'
import { myWallPosts } from '../helper/data'


// ActionCreator
export const getMyPosts = () => {

  return function(dispatch){
    fetch("http://localhost:3000/users/1/posts")
    .then(res => res.json())
    .then(posts => {
      dispatch({ type: FETCH_MY_POSTS, payload: posts})
    })
  }
  // Return is an action
  // return { type: FETCH_MY_POSTS, payload: myWallPosts }
}

export const createPost = (content, userId) => {
  return function(dispatch) {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        content: content,
        user_id: userId
      })
    })
    .then(res => res.json())
    .then(post => {
      // ONCE THE FETCH HAS FINISHED WE SHOULD THEN DISPATCH
      dispatch({type: CREATE_POST, payload: post })
    })
  }
}