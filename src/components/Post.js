import React from 'react'

// DOES THIS COMPONENT NEED TO BE CONNECTED TO THE STORE?
// WHERE IS THIS COMPONENT GETTING ITS VALUES FROM?

export default function Post(props){
  return (<li>{props.post.content}</li>)
}