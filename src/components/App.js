import React from 'react';

import HomePage from './HomePage'
import MyWall from './MyWall'

function App() {

  // SOLVING AN ISSUE
  // WHEN I AM IN A LOGGED IN,
  // I WANT TO BE ABLE TO SEE TWO DIFFERENT
  // COMPONENTS. How can I use redux to change me 
  // from just seeing the home page to seeing my timeline
  // QUESTION: HOW DO I WANT WANT TO CHANGE THE CONDITIONAL CHECK?
  const whichComponent = true ? <MyWall /> : <HomePage/>
  
  return (
    <div className="App">
      {whichComponent}
    </div>
  );
}

export default App;
