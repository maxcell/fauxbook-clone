import React, { Component } from 'react'

import { connect } from 'react-redux'

import { createPost} from '../redux/actions'

class CreateNewPost extends Component {

  // This component should
  // hande us making a new post

  state = {
    content: ''
  }
  
  handleChange = (e) => {
    
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // 1. I need to update the store - happens here
    this.props.dispatch(createPost(this.state.content, 1))
    // 2. We need to the store what it should look like afterwards - reducers
  }

  // DOES THIS COMPONENT NEED LOCAL STATE OR TO RECEIVE ITS STATE
  // FROM THE STORE
  render(){
    return (<form onSubmit={this.handleSubmit}>
      <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
      <input type="submit" value="ADD YO POST YO" />
    </form>)
  }
}

export default connect()(CreateNewPost)