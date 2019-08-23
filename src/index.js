import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import reducer from './redux/reducer'

// QUESTION: In order to make sure all of my components are able to
// communicate to the redux store, what do I need to do?
// HINT: What component do I need to have?

import { Provider } from 'react-redux'

import thunk from 'redux-thunk'

// FOLLOW UP: Does it need additional data? If so, where does that
// data come from? Is there anything we need to setup?
import { createStore, applyMiddleware } from 'redux'

const store = createStore(reducer, applyMiddleware(thunk))

// TIP: If you want to use your reduxdevtools, you're going to want
// to use this line: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));