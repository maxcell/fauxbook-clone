import React from 'react'

import Post from './Post'

import { connect } from 'react-redux'

import { getMyPosts } from '../redux/actions'

import CreateNewPost from './CreateNewPost';


// QUESTION 1: DOES THIS COMPONENT HAVE LOCAL STATE OR DOES IT GET IT FROM THE REDUX STORE?
// QUESTION 2: DOES THIS COMPONENT NEED TO BE ABLE TO DO SOMETHING AT A CERTAIN TIME?

class MyWall extends React.Component {

  componentDidMount(){
    // Once the component mounts we need to get some data!
    // THIS LINE OF CODE WOULD HAPPEN IN OUR THEN AFTER THE FETCH
    // this.props.dispatch({ type: FETCH_MY_POSTS, payload: myWallPosts })
    this.props.getMyPosts()
  }

  render(){
    return (
    <React.Fragment>
      <CreateNewPost />
      <ul>{this.props.posts.map(post => <Post key={post.id} post={post} />)}</ul>
    </React.Fragment>)
  }
}

// Takes the state/store of redux and allows us to use them
// in our connected component
const mapStateToProps = (store) => {
  return {
    posts: store.postsOnMyWall
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
 // getMyPosts: () => { dispatch(getMyPosts()) }
    getMyPosts: getMyPosts // Ya boi made a mistake and is fixing his mistake
  }
}

export default connect(mapStateToProps, mapDispatchToProps/* mapStateToProps, mapDispatchToProps */)(MyWall)
