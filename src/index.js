import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import NavBar from './components/NavBar';


ReactDOM.render(
   
    <Provider store = { store } >
       <NavBar/>,
        <App />,
    </Provider>,
    document.querySelector('#root')
);