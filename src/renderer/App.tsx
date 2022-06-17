import { Provider } from 'react-redux';
import React from 'react';
import './App.css';
import { Router } from './Router'
import { store } from './store';


export default function App() {
  return (
    <Provider store={store}> 
      <React.StrictMode>
       <Router />
      </React.StrictMode>
    </Provider>
  )
}
